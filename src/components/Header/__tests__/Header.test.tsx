import { render } from '@testing-library/react'

import { Header } from '@/components/Header'

describe('Header exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Header />)
    expect(component).not.toBeNull()
  })
})
