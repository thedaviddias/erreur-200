import { render } from '@testing-library/react'

import { Player } from '@/components/Player'

describe('Player exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Player />)
    expect(component).not.toBeNull()
  })
})
