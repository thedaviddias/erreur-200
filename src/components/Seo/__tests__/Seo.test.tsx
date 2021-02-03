import { render } from '@testing-library/react'

import { Seo } from '../Seo'

describe('Seo exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Seo />)
    expect(component).not.toBeNull()
  })
})
