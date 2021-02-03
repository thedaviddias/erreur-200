import { render } from '@testing-library/react'

import { Meta } from '@/components/Meta'

describe('Meta exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Meta />)
    expect(component).not.toBeNull()
  })
})
