import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from '../../components/LinkWrapper'
import { MapProps } from '../../components/Map'

const Map = dynamic(() => import('../../components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      {/** Configuração local página a página de SEO */}
      <NextSeo
        title="My Trips"
        description="Um site que mostra todas as minhas viagens"
        canonical="https://powertrend.com.br"
        openGraph={{
          url: 'https://powertrend.com.br',
          title: 'My Trips',
          description: 'Um site que mostra todas as minhas viagens',
          images: [
            {
              url: 'https://powertrend.com.br/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
