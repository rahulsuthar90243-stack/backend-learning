import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CreatePost() {
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState(null)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)
  const navigate = useNavigate()

  function handleImageChange(event) {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Please choose an image file.')
      return
    }

    setError('')
    setImage({ file, preview: URL.createObjectURL(file) })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!image) {
      setError('Add a photo before publishing your post.')
      return
    }

    navigate('/')
  }

  return (
    <section className='mx-auto max-w-2xl py-4 sm:py-10'>
      <div className='mb-8 flex items-center justify-between gap-4'>
        <div>
          <p className='text-sm font-medium uppercase tracking-[0.18em] text-emerald-400'>
            New post
          </p>
          <h1 className='mt-2 text-3xl font-semibold tracking-tight sm:text-4xl'>
            Share a moment
          </h1>
        </div>
        <Link
          to='/'
          className='rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white'
        >
          Cancel
        </Link>
      </div>

      <form onSubmit={handleSubmit} className='rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 shadow-2xl shadow-black/20 sm:p-6'>
        <div
          role='button'
          tabIndex={0}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') fileInputRef.current?.click()
          }}
          className='group relative flex min-h-72 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-dashed border-zinc-700 bg-zinc-900 transition hover:border-emerald-400/70 hover:bg-zinc-900/80'
        >
          {image ? (
            <>
              <img src={image.preview} alt='Selected post preview' className='h-full max-h-96 w-full object-contain' />
              <span className='absolute bottom-4 rounded-full bg-black/70 px-4 py-2 text-sm text-white opacity-0 transition group-hover:opacity-100'>
                Choose a different photo
              </span>
            </>
          ) : (
            <div className='px-6 text-center'>
              <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10 text-2xl text-emerald-400'>
                +
              </div>
              <p className='mt-4 font-medium text-white'>Add a photo</p>
              <p className='mt-1 text-sm text-zinc-500'>PNG, JPG, or WEBP up to 10 MB</p>
            </div>
          )}
          <input ref={fileInputRef} type='file' accept='image/*' onChange={handleImageChange} className='hidden' />
        </div>

        {image && (
          <button
            type='button'
            onClick={() => setImage(null)}
            className='mt-3 text-sm text-zinc-500 transition hover:text-red-300'
          >
            Remove photo
          </button>
        )}

        <div className='mt-6'>
          <div className='flex items-center justify-between gap-4'>
            <label htmlFor='post-caption' className='text-sm font-medium text-zinc-200'>
              Caption <span className='font-normal text-zinc-500'>optional</span>
            </label>
            <span className='text-xs text-zinc-500'>{caption.length}/180</span>
          </div>
          <textarea
            id='post-caption'
            value={caption}
            maxLength={180}
            onChange={(event) => setCaption(event.target.value)}
            placeholder='Tell people about this moment...'
            rows={3}
            className='mt-2 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10'
          />
        </div>

        {error && <p className='mt-3 text-sm text-red-300'>{error}</p>}

        <button
          type='submit'
          className='mt-6 w-full rounded-xl bg-emerald-400 px-4 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-40'
          disabled={!image}
        >
          Publish post
        </button>
      </form>
    </section>
  )
}

export default CreatePost