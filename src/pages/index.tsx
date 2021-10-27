import HomeTemplate from '../templates/Home'
import { MapProps } from '../components/Map/index'
import client from '../graphql/client'
import { GET_PLACES } from '../graphql/queries'
import { GetPlacesQuery } from '../graphql/generated/graphql'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

//Método que popula a página
export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 5,
    props: { places }
  }
}
