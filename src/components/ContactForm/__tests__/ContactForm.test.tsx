import { render } from '@testing-library/react'

import { ContactForm } from '@/components/ContactForm'

describe('ContactForm exists', () => {
  it('should renders without crashing', () => {
    const component = render(<ContactForm />)
    expect(component).not.toBeNull()
  })
})
