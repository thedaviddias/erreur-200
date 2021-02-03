import { render } from '@testing-library/react'

import { Hosts } from '@/components/Hosts'

describe('Hosts exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Hosts />)
    expect(component).not.toBeNull()
  })
})
