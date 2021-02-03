import { render } from '@testing-library/react'

import { EpisodeList } from '@/components/EpisodeList'

describe('EpisodeList exists', () => {
  it('should renders without crashing', () => {
    const component = render(<EpisodeList />)
    expect(component).not.toBeNull()
  })
})
