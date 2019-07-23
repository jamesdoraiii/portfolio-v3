import React from "react"
import Layout from "../components/layout-page"
import SEO from "../components/seo"
import PageNav from "../components/page-nav"
import aboutIMG from "../images/twins-about.jpg"
import {
  FaFish,
  FaIceCream,
  FaCompactDisc,
  FaTshirt,
  FaBandAid,
} from "react-icons/fa"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <div className="container">
        <div className="about page__content">
          <h2>About Me:</h2>
          <img
            className="about__image"
            src={aboutIMG}
            alt="Justin Juno Twins"
          />
          <p>
            Hello, my name is Justin Juno! I'm an EdTech developer and advocate
            from Whitehouse, Texas. I work for Mentoring Minds, a national
            educational publisher, where I lead the design and development of
            our digital landscape.
          </p>
          <p>
            I'm happily married and a proud father of twins. When I'm not
            coding, changing diapers, or sleeping, chances are I'm spending time
            with my beautiful family or wood-working.
          </p>
          <h3>Fun Facts:</h3>
          <ul className="about__facts">
            <li>
              <span>
                <FaFish />
              </span>
              Many moons ago, I was a Pantry Chef at a high-end sushi
              restaurant.
            </li>
            <li>
              <span>
                <FaCompactDisc />
              </span>
              I love the Beastie Boys! Their album "Hello Nasty" changed my
              life.
            </li>
            <li>
              <span>
                <FaIceCream />
              </span>
              I have an unhealthy addiction to Blue Bell ice cream.
            </li>
            <li>
              <span>
                <FaBandAid />
              </span>
              I'm deeply terrified of wasps or anything that can fly and sting.
            </li>
            <li>
              <span>
                <FaTshirt />
              </span>
              I've created merchandise for several major recording artists,
              including a Beatle.
            </li>
          </ul>
          <PageNav />
        </div>
      </div>
    </Layout>
  )
}
