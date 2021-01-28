import { render } from '@testing-library/react'

import { Platforms } from '@/components/Platforms'

describe('Platforms exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Platforms />)
    expect(component).not.toBeNull()
  })
})
