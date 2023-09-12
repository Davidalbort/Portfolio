import { render, screen } from '@testing-library/react'
import Home from './page'

describe('<Home />', () => {
  test('render and title', () => {
    render(<Home />)
    const title = screen.getByRole('heading', {
      name: 'Roger David Alba Ortega',
    })
    expect(title).toBeInTheDocument()
  })
})
