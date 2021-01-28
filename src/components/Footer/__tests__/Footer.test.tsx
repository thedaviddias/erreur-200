import { render } from '@testing-library/react'

import { Footer } from '@/components/Footer'

describe('Footer exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Footer />)
    expect(component).not.toBeNull()
  })
})
