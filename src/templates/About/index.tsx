import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trip</S.Heading>

    <S.Body>
      <p>
        Elit reprehenderit pariatur anim in nostrud. Commodo aute aliqua commodo
        est magna veniam aliquip elit eu nisi amet mollit ut dolor. Laboris
        occaecat ut amet sit labore.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
