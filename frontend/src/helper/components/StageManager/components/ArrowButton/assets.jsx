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

const Show = props => (
  <svg className="preview-panel--svg" {...props}>
    <path d="M8.587 0C5.306 0 2.33 1.8.134 4.711a.68.68 0 0 0 0 .812c2.2 2.92 5.172 4.715 8.453 4.715s6.257-1.8 8.453-4.711a.68.68 0 0 0 0-.812C14.844 1.795 11.869 0 8.587 0zm.235 8.723a3.612 3.612 0 1 1 3.369-3.369 3.614 3.614 0 0 1-3.368 3.369zm-.109-1.665a1.945 1.945 0 1 1 1.816-1.816 1.942 1.942 0 0 1-1.815 1.816z" />
  </svg>
)

const Hidden = props => (
  <svg width="24" height="24" className="preview-panel--svg" {...props}>
    <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
    <path d="M11.8 8.6l3 3.1v-.2c0-1.6-1.3-2.9-2.9-2.9h-.1zm.2-1.9c2.7 0 4.8 2.2 4.8 4.9 0 .6-.1 1.2-.3 1.8l2.8 2.8c1.5-1.2 2.6-2.8 3.3-4.6-1.7-4.3-5.8-7.4-10.6-7.4-1.3 0-2.6.2-3.8.7l2 2.1c.6-.2 1.2-.3 1.8-.3zM2.4 4l2.2 2.2.4.5C3.4 8 2.2 9.6 1.4 11.5c1.7 4.3 5.8 7.3 10.6 7.3 1.5 0 2.9-.3 4.2-.8l.4.4 2.8 2.8 1.2-1.2-17-17.2L2.4 4zm5.3 5.4l1.5 1.5c0 .2-.1.4-.1.6 0 1.6 1.3 2.9 2.9 2.9.2 0 .4 0 .6-.1l1.5 1.5c-.6.3-1.4.5-2.1.5-2.7 0-4.8-2.2-4.8-4.9 0-.7.2-1.4.5-2zm0 0" />
  </svg>
)

export default { Left, Right, Send, Show, Hidden }