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
      <h3 className="mt-12">Information</h3>
      <ul className="mt-3">
        <li>- <a href="https://analytics.google.com" target="_blank">Google Analytics - Home</a></li>
      </ul>
      <h3 className="mt-12">Metrics Trackers</h3>
      <ul className="mt-3">
        <li>- <a href="https://analytics.google.com" target="_blank">Google Analytics - Home</a></li>
        <li>- <a href="https://tobyhogan.github.io/metrics-dashboard/" target="_blank">Habitazen Metrics Tracker</a></li>
      </ul>
      <h3 className="mt-6">Templates</h3>
      <ul className="mt-3">
        <li>- <a href="https://tobyhogan.github.io/tsx-gatsby-tailwind-landing-template/" target="_blank">JSX Gatsby Tailwind Landing Page</a></li>
      </ul>
      <h3 className="mt-6">Business Links</h3>
      <ul className="mt-3 pl-4">
        <li>- <a href="https://habit-tracker-indol-ten.vercel.app/habit" target="_blank">Habitazen Web App</a></li>
        <li>- <a href="https://tobyhogan.github.io/habit-tracker-landing-page/about" target="_blank">Habitazen Landing Page</a></li>
        <li>- <a href="https://tobyhogan.github.io/kazen-projects-landing-page/" target="_blank">Kazen Projects Landing Page</a></li>
      </ul>
      <h3 className="mt-6">Freelance Links</h3>
      <ul className="mt-3">
        <li>- <a href="https://tobyhogan.github.io/consulting-landing-page/" target="_blank">Kazen Consulting Site</a></li>
        <li>- <a href="https://tobyhogan.github.io/freelance-landing-page/" target="_blank">Toby Hogan Consulting Site</a></li>
      </ul>
      <h3 className="mt-6">Other Links</h3>
      <ul className="mt-3 pl-4">
        <li>- <a href="https://tobyhogan.space" target="_blank">tobyhogan.space Site</a></li>
        <li>- <a href="https://browser-music-viewer.vercel.app/" target="_blank">Track Stem Mixer Web App</a></li>
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Admin Resources</title>
