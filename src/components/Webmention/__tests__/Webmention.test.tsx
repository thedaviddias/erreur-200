import { render } from '@testing-library/react'

import { Webmention } from '@/components/Webmention'

describe('Webmention exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Webmention />)
    expect(component).not.toBeNull()
  })
})
