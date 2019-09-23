// modules
import React from 'react'
import { render } from 'react-dom'
// components
import Root from './setup/root'

const renderAzmoon = () =>
  render(<Root />, window.document.getElementById('root'))

renderAzmoon()

// Hot Module Replacement API
if (module.hot) module.hot.accept('./setup/root', renderAzmoon)
