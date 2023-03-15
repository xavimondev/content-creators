import Image from 'next/image'
import CustomLink from './custom-link'

type CategoryProps = {
  id: string
  name: string
  colorFrom: string
  colorTo: string
  image: any
}

export const CategoryCard = ({ id, name, colorFrom, colorTo, image }: CategoryProps) => {
  return (
    <>
      <article
        key={id}
        className={`w-full rounded-xl transition duration-200 ease-in-out group hover:-translate-y-1 `}
        style={{
          background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})`
        }}
      >
        <CustomLink href={`category/${id}`}>
          <div className='h-auto flex flex-col gap-8 py-8 px-4'>
            <Image src={image} height='256' width='256' alt={name} />
            <p className='max-w-xl font-bold text-white text-lg'>{name}</p>
          </div>
        </CustomLink>
      </article>
    </>
  )
}

export const CategoryItem = ({ id, name, colorFrom, colorTo, image }: CategoryProps) => {
  return (
    <>
      <li>
        <CustomLink href={`/category/${id}`}>
          <div className='flex flex-col gap-1 items-center'>
            <div
              className={`w-14 h-14 p-1 rounded-full`}
              style={{
                background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})`
              }}
            >
              <div className='h-full p-1 text-white rounded-full'>
                <Image
                  className='rounded-full w-full h-full'
                  src={image}
                  alt='frontend'
                  width='100'
                  height='100'
                />
              </div>
            </div>
            <span className='text-center text-white font-semibold'>{name.toLowerCase()}</span>
          </div>
        </CustomLink>
      </li>
    </>
  )
}
