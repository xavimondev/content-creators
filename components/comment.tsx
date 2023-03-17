import Image from 'next/image'

import { Comment } from 'types'

import { TrashIc } from './icons'

type CommentProps = {
  commentInfo: Comment
  handleDelete: (commentId: number) => void
}

const CommentCard = ({ commentInfo, handleDelete }: CommentProps) => {
  const { id, message, author, authorAvatar, authorUsername } = commentInfo

  return (
    <div className='bg-[#1E1C26] rounded-xl sm:max-w-[350px] sm:w-[320px] sm:h-[280px] shadow-md p-5 w-full h-full flex flex-col gap-3'>
      <div className='flex justify-between items-center'>
        <h3 className='text-sm text-gray-500 font-semibold'>Marzo 15, 2023</h3>
        {/* Tools: remove and edit */}
        <div className='space-x-2'>
          <button onClick={() => handleDelete(id)}>
            <TrashIc className='text-red-300 h-4 w-4' />
          </button>
        </div>
      </div>
      <blockquote>
        <p className='text-white text-base sm:text-lg'>{message}</p>
      </blockquote>
      <div className='mt-auto flex flex-row items-center gap-3'>
        <div className='rounded-full w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-[#d5578f] p-0.5'>
          <div className='relative w-full h-full bg-[#1E1C26] rounded-full'>
            <Image src={authorAvatar} className='rounded-full' alt={author} fill />
          </div>
        </div>
        <div className='space-y-0.5'>
          <span className='font-semibold text-white/80'>{author}</span>
          <div className='text-sm font-light text-gray-400'>{authorUsername}</div>
        </div>
      </div>
    </div>
  )
}

export default CommentCard
