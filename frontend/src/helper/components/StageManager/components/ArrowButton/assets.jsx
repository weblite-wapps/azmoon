import React from 'react'

// Left Arrow
const Left = props => (
  <svg
    focusable="false"
    viewBox="0 0 20 20"
    className="recast--arrow-svg left"
    {...props}
  >
    <path fill="transparent" d="M-1-1h22v22H-1z" />
    <path
      d="M13.98503 4.94976l.01906-2.95734L7.47101 8.5255l-1.4751 1.4751 1.47391 1.47391 6.53308 6.53308v-2.93947L8.93419 9.99941l5.05084-5.04965z"
      fill="#fff"
      stroke="null"
    />
  </svg>
)

// Right Arrow
const Right = props => (
  <svg
    focusable="false"
    viewBox="0 0 20 20"
    className="recast--arrow-svg right"
    {...props}
  >
    <path fill="transparent" d="M-1-1h22v22H-1z" />
    <path
      transform="matrix(-20.68729 0 0 -20.68729 2918.09680187 1058.1062745)"
      d="M125.426 46.42577l.016-2.482-5.483 5.483-1.238 1.238 1.237 1.237 5.483 5.483v-2.467l-4.254-4.254 4.239-4.238z"
    />
    <path d="M6.18908 14.8296l-.01823 2.82814 6.24766-6.24766 1.41065-1.41065-1.40951-1.40951-6.24766-6.24766v2.81105l4.84726 4.84726-4.83017 4.82903z" />
  </svg>
)

// Titled Icon
const Titled = ({ title, ...other }) => (
  <div className="arrow-button--send" {...other}>
    {title}
  </div>
)

export default { Left, Right, Titled }
