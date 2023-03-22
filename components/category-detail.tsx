import { useEffect, useState } from 'react'

import { api } from 'data/api'

import type { Category, Creator } from 'types'

import NoDataFound from './no-data-found'
import FormSearch from './form-search'
import ListCreator from './list-creator'
import FallBackLoader from 'components/fallback'

type PropsCategoryDetail = {
  categoryId: Category
}

const CategoryDetail = ({ categoryId }: PropsCategoryDetail) => {
  const [creators, setCreators] = useState<Creator[]>([])
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [query, setQuery] = useState<string>('')

  // TODO: Check if this useEffect is an anti-pattern
  useEffect(() => {
    if (!categoryId) return

    setIsLoading(true)
    api
      .search(categoryId)
      .then((data) => {
        setCreators(data)
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      setQuery('')
      setIsSearching(false)
    }
  }, [categoryId])

  if (isLoading) return <FallBackLoader msg='Cargando resultados' />

  return (
    <>
      {(creators.length > 0 || isSearching) && (
        <FormSearch
          nameClass='mb-8'
          setCreators={setCreators}
          setIsSearching={setIsSearching}
          setQuery={setQuery}
        />
      )}
      {creators.length > 0 ? (
        <ListCreator listCreators={creators} />
      ) : (
        <NoDataFound
          message='No se encontraron resultados para'
          keyword={isSearching ? query : categoryId}
        />
      )}
    </>
  )
}

export default CategoryDetail
