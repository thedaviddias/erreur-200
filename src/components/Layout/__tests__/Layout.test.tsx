import { render } from '@testing-library/react'

import { Layout } from '@/components/Layout'

describe('Layout exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Layout />)
    expect(component).not.toBeNull()
  })
})
