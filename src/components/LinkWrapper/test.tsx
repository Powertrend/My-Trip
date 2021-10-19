import { render, screen } from '@testing-library/react'

import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByRole('link', { name: /anything/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')

    //Podemos executar esse comando para ver no testing playground se tá tudo funcionando mesmo
    screen.logTestingPlaygroundURL()
  })
})
