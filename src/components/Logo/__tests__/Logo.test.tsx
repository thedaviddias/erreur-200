import { render } from '@testing-library/react'

import { Logo } from '@/components/Logo'

describe('Logo exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Logo />)
    expect(component).not.toBeNull()
  })
})
