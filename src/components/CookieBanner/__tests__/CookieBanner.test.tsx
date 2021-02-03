import { render } from '@testing-library/react'

import { CookieBanner } from '@/components/CookieBanner'

describe('CookieBanner exists', () => {
  it('should renders without crashing', () => {
    const component = render(<CookieBanner />)
    expect(component).not.toBeNull()
  })
})
