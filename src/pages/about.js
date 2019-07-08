import React from "react"
import Layout from "../components/layout-page"
import SEO from "../components/seo"
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
            src="http://placehold.it/1920x1080.jpg"
            alt="Justin Juno Family"
          />
          <p>
            My name is Justin Juno. I'm an infinitely curious JavaScript
            developer with a passion for serving the classroom and helping
            teachers champion digital environments. I live in Whitehouse, Texas
            and work for Mentoring Minds, a national educational publisher.
            Where I lead the design and development of our digital landscape.
          </p>
          <p>
            In my spare time, I enjoy coaching aspiring developers,
            wood-working, and spending time with my lovely wife and our
            beautiful twins.
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
        </div>
      </div>
    </Layout>
  )
}
