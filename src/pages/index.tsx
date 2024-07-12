import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'



const mainStyles = {

}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <h1 className="text-center text-3xl mt-16 underline">Admin Resources</h1>
      <ul className="mx-auto w-fit mt-6">
        <li>- <a href="https://tobyhogan.github.io/metrics-dashboard/" target="_blank">Habitazen: Metrics Tracker</a></li>
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Admin Resources</title>
