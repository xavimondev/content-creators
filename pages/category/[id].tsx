import { useRouter } from 'next/router'
import Head from 'next/head'

import { Category } from 'types'
import { LIST_CATEGORIES } from 'data/categories'

import Layout from 'components/layout'
import { LeftArrowIc } from 'components/icons'
import CustomLink from 'components/custom-link'
import ListCategory from 'components/list-category'
import CategoryDetail from 'components/category-detail'

const DashboardCategory = () => {
  const router = useRouter()
  const { id } = router.query
  const title = id ? `Dashboard: ${id} 🚀` : 'Loading...'
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <div className='flex flex-row gap-2 items-center mb-12'>
          <CustomLink href='/'>
            <LeftArrowIc className='h-6 w-6 lg:h-8 lg:w-8 text-white' />
          </CustomLink>
          <span className='text-center text-base sm:text-lg lg:text-xl text-white'>
            Todas las categorías
          </span>
        </div>
        <div className='flex flex-col gap-4'>
          {/* Tecnologías slider */}
          <ListCategory listCategories={LIST_CATEGORIES} />
          <CategoryDetail categoryId={id as Category} />
        </div>
      </Layout>
    </>
  )
}

export default DashboardCategory
