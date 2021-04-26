import React from 'react'

const Footer = () => (
  <footer className="footer">
    <p>
      © {new Date().getFullYear()}
      {` `}
      <a href="https://takeshape.io" target="_blank" rel="noopener noreferrer nofollow">
        TakeShape Inc.
      </a>
    </p>
  </footer>
)

export default Footer
