import {
  FaCarAlt,
  FaGamepad,
  FaMotorcycle,
  FaPizzaSlice,
  FaStopwatch,
} from "react-icons/fa"

import Layout from "../components/layout-page"
import PageNav from "../components/page-nav"
import React from "react"
import SEO from "../components/seo"
import me from "../images/me.jpeg"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <div className="container">
        <div className="about page__content">
          <h2>About Me:</h2>
          <img className="about__image" src={me} alt="Jimmy" />
          <p>
            Hello, my name is James Dora! I am an Indiana University Bloomington
            Alumnus as well as a graduate from Eleven Fifty's JavaScript boot
            camp in Fishers. I currently reside in Chicago Illinois where I have
            been working as a full stack web developer full time for a little
            over 2 years. I love solving problems and facing new challenges, so
            programming is a natural fit for me.
          </p>

          <h3>Fun Facts About Me:</h3>
          <ul className="about__facts">
            <li>
              <span>
                <FaPizzaSlice />
              </span>
              In my free time I love to cook and bake. One of my favorite things
              to cook is homemade pizzas and I love experimenting in the
              kitchen.
            </li>
            <li>
              <span>
                <FaCarAlt />
              </span>
              I am a massive automotive enthusiast and love anything that has to
              do with cars. One of my favorite weekend activities is visiting
              Cars and Coffee meets with my father.
            </li>
            {/* <li>
              <span>
                <FaStopwatch />
              </span>
              I am very interested in horology and love colleting watches.
            </li> */}
            <li>
              <span>
                <FaGamepad />
              </span>
              When I have free time I enjoy PC gaming! Feel free to add me on
              Steam @jimmyd233
            </li>
            {/* <li>
              <span>
                <FaMotorcycle />
              </span>
              Although I no longer ride when I was in college I loved buying,
              repairing, and customizing cheap motorcycles then flipping them
              for a profit. I think this is partly where my enthusiasm for
              problem solving and building things came from.
            </li> */}
          </ul>
          <PageNav />
        </div>
      </div>
    </Layout>
  )
}
