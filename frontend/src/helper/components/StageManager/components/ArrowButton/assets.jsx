import React from 'react'

// Left Arrow
const Left = props => (
  <svg focusable="false" className="recast--arrow-svg" {...props}>
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M17.3 1.4l-8.6 8.7-2 1.9 2 1.9 8.6 8.7c0-2.5-1-4.9-2.8-6.7L10.6 12l3.9-3.9c1.8-1.8 2.8-4.2 2.8-6.7z" />
  </svg>
)

// Right Arrow
const Right = props => (
  <svg focusable="false" className="recast--arrow-svg" {...props}>
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />

    <path d="M.022 15.454L0 18.954l7.732-7.732 1.745-1.745-1.745-1.745L0 0v3.478l6 6z" />
  </svg>
)

// send Icon
const Send = props => (
  <div className="arrow-button--send" {...props}>
    Send
  </div>
)

export default { Left, Right, Send }
