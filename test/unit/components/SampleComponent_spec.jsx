import React from 'react'
import ReactDOM from 'react-dom'
import { renderIntoDocument } from 'react-addons-test-utils'
import SampleComponent from '../../../src/components/SampleComponent'

describe('SampleComponent', () => {
  it('renders', () => {
    const component = renderIntoDocument(
      <SampleComponent />
    )
  })
})
