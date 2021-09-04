import * as React from "react"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{ pageTitle }</title>
      <main>
        { children }
      </main>
    </div>
  )
}

export default Layout