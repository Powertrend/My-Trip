//Tipos de chamadas do NextJS
//getStaticPaths => gera as urls em build time ex.: /about, /trip/belohorizonte
//getStaticProps => para buscar os dados da página (props) - build time - estático
//getServerSideProps => para buscar os dados da página (props) - runtime - toda requisição (bundle fica no server)
//getInitialProps => para buscar os dados da página (props) - runtime - toda requisição (bundle fica no server e vai pro client) - hydrate (Está caindo em desuso)

import client from '../graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from '../graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'

//Geração da página através de um template
export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  //retorna um loading, qq coisa enquanto tá sendo carregado
  //Nesse caso estamos retornando null

  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

//Aqui estamos gerando as urls das páginas
export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
