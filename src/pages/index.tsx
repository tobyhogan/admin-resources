import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'



const mainStyles = {

}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <h1 className="text-center text-3xl mt-16 font-extrabold"> &#62;&#62; ADMIN RESOURCES &#60;&#60;</h1>
      <h3 className="mt-16">Statistics:</h3>
      <ul className="mt-3">
        <li>- <a href="https://tobyhogan.github.io/metrics-dashboard/" target="_blank">Habitazen: Metrics Tracker</a></li>
      </ul>
      <h3 className="mt-6">Templates</h3>
      <ul className="mt-3">
        <li>- <a href="https://tobyhogan.github.io/tsx-gatsby-tailwind-landing-template/" target="_blank">JSX Gatsby Tailwind Landing Page</a></li>
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Admin Resources</title>
