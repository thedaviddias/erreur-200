import { render } from '@testing-library/react'

import { Episode } from '@/components/Episode'

describe('Episode exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Episode />)
    expect(component).not.toBeNull()
  })
})
