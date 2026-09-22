import { useState } from "react"

const Fead = () => {
    const [post, setPost] = useState([
        {
           _id: '1',
            image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
            caption: 'A quiet moment worth sharing.',
            createdAt: 'Today',
        }
    ])

    return (
        <section className='mx-auto max-w-2xl py-6'>
            <div className='mb-8'>
                <div>
                    <p className='text-sm font-medium uppercase tracking-[0.18em] text-emerald-400'>
                        Community feed
                    </p>
                    <h1 className='mt-2 text-3xl font-semibold tracking-tight'>Recent posts</h1>
                </div>
            </div>

            {post.length === 0 ? (
                <div className='rounded-2xl border border-dashed border-zinc-700 p-12 text-center'>
                    <p className='text-zinc-400'>No posts to show yet.</p>
                </div>
            ) : (
                <div className='space-y-6'>
                    {post.map((item) => (
                        <article key={item._id} className='overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950'>
                            <img
                                src={item.image}
                                alt={item.caption || 'Post image'}
                                className='max-h-[36rem] w-full object-cover'
                            />
                            <div className='p-5'>
                                <div>
                                    <p className='text-xs uppercase tracking-[0.16em] text-zinc-500'>{item.createdAt}</p>
                                    <p className='mt-3 text-zinc-200'>{item.caption}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Fead