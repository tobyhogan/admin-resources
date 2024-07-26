import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'



const mainStyles = {

}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <h1 className="text-center text-2xl mt-16 font-extrabold"> &#62;&#62; ADMIN RESOURCES &#60;&#60;</h1>
      <h3 className="mt-12">Statistics:</h3>
      <ul className="mt-3">
        <li>- <a href="https://tobyhogan.github.io/metrics-dashboard/" target="_blank">Habitazen: Metrics Tracker</a></li>
      </ul>
      <h3 className="mt-6">Templates</h3>
      <ul className="mt-3">
        <li>- <a href="https://tobyhogan.github.io/tsx-gatsby-tailwind-landing-template/" target="_blank">JSX Gatsby Tailwind Landing Page</a></li>
      </ul>
      <h3 className="mt-6">Links</h3>
      <ul className="mt-3">
        <li>- <a href="https://tobyhogan.space" target="_blank">tobyhogan.space</a></li>
        <li>- <a href="https://kazenprojects.com" target="_blank">Kazen Projects</a></li>
        <li>- <a href="https://habit-tracker-indol-ten.vercel.app/habit" target="_blank">Habit Tracker</a></li>
        <li>- <a href="https://tobyhogan.github.io/habit-tracker-landing-page/about" target="_blank">Habit Tracker Landing Page</a></li>

      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Admin Resources</title>
