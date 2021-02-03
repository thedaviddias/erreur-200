import { Link } from '@/components/LinkCustom'
import { render } from '@testing-library/react'

describe('Link exists', () => {
  it('should renders without crashing', () => {
    const component = render(<Link />)
    expect(component).not.toBeNull()
  })
})
