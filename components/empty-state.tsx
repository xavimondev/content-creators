import Image from 'next/image'
import CustomLink from './custom-link'

type NoDataFoundProps = {
  children?: React.ReactNode // it could be a fancy component that shows an error message or a simple message
}

const NoDataFound = ({ children }: NoDataFoundProps) => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center mt-16'>
      <Image src='/img/no-data.webp' alt='Data not found' height='250' width='250' layout='fixed' />
      <p className='dark:text-white text-base md:text-xl font-semibold max-w-xl text-center'>
        {children}Sin embargo, puedes agregarlos contribuyendo al{' '}
        <CustomLink
          classes='text-cyan-500'
          href='https://github.com/d3vcloud/social-creators'
          target='_blank'
        >
          🚀 repositorio 😊
        </CustomLink>
        .
      </p>
    </div>
  )
}

export default NoDataFound
