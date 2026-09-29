import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcrypt";

const normalizeAuthBody = (body = {}) => ({
  username: body.username ?? body.Username ?? body.userName,
  email: body.email ?? body.Email,
  password: body.password ?? body.Password,
  role: body.role ?? "user",
});

const registerUser = async (req, res) => {
  const { username, email, password, role } = normalizeAuthBody(req.body);

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "username, email and password are required" });
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashPass = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hashPass,
    role,
  });
  // console.log(user)

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User Register Successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
    },
  });
};

const login = async (req, res) => {
  try {
    const {email, password } = normalizeAuthBody(req.body);

    if (!email || !password) {
      return res.status(400).json({
        message: "email and password are required",
      });
    }

    const user = await userModel.findOne({
      $or: [{ password }, { email }],
    });

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    // console.log(user);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password Invalid" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);

    return res.status(200).json({
      message: "login successfully",
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
    });

  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

const logoutUser = async(req, res) => {

  res.clearCookie("token");

  return res.status(200).json({
    message:"logged out successfully"
  })
}

export {registerUser, login, logoutUser};
