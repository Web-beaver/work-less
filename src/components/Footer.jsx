import React from 'react'

function Footer({dateState}) {
  return (
    <div id="footer">
        <div id="footerleft">
            <div>
              <h5>2023 &copy;</h5>
            </div>
            <div>
            <h5>{dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            
            })} IST</h5>
            </div>
        </div>
        <div id="footerright">
            <a href="https://github.com/ishn123">GitHub</a><a href="https://www.instagram.com/ishn__/">instagram</a><a href="https://www.linkedin.com/in/ishan-arora-2000/">linkedin</a><a href="https://twitter.com/_WebBeaverX_">twitter</a>
        </div>
    </div>
  )
}

export default Footer