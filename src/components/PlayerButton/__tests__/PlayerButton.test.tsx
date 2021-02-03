import { render } from '@testing-library/react'

import { PlayerButton } from '@/components/PlayerButton'

describe('PlayerButton exists', () => {
  it('should renders without crashing', () => {
    const component = render(<PlayerButton />)
    expect(component).not.toBeNull()
  })
})
