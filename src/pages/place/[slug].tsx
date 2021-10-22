//Tipos de chamadas do NextJS
//getStaticPaths => gera as urls em build time ex.: /about, /trip/belohorizonte
//getStaticProps => para buscar os dados da página (props) - build time - estático
//getServerSideProps => para buscar os dados da página (props) - runtime - toda requisição (bundle fica no server)
//getInitialProps => para buscar os dados da página (props) - runtime - toda requisição (bundle fica no server e vai pro client) - hydrate (Está caindo em desuso)

import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import { GetPlacesQuery, GetPlaceBySlugQuery } from 'graphql/generated/graphql'
import PlacesTemplate, { PlacesTemplateProps } from 'templates/Places'

export default function Place({ place }: PlacesTemplateProps) {
  const router = useRouter()

  //retorna um loading, qq coisa enquanto tá sendo carregado
  //Nesse caso estamos retornando null

  if (router.isFallback) return null

  return <PlacesTemplate place={place} />
}

//Aqui estamos gerando as urls das páginas
export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    props: {
      place
    }
  }
}
