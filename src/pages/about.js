import React from "react"
import Layout from "../components/layout-page"
import SEO from "../components/seo"
import PageNav from "../components/page-nav"
import me from "../images/me.jpeg"
import {
  FaPizzaSlice,
  FaCarAlt,
  FaStopwatch,
  FaGamepad,
  FaMotorcycle,
} from "react-icons/fa"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <div className="container">
        <div className="about page__content">
          <h2>About Me:</h2>
          <img className="about__image" src={me} alt="Jimmy" />
          <p>
            Hello, my name is James Dora! I'm a web developer from Indianapolis,
            Indiana. I am currently working as a React developer for a
            consulting firm called PearCircuit in Fishers Indiana. I am an
            Indiana University Bloomington Alumnus as well as a graduate from
            Eleven Fifty's JavaScript boot camp in Fishers. I love solving
            problems and facing new challenges so programming is a natural fit
            for me.
          </p>

          <h3>Fun Facts About Me:</h3>
          <ul className="about__facts">
            <li>
              <span>
                <FaPizzaSlice />
              </span>
              I love to cook and I make a mean home made pizza. Both New York
              and Chicago style!
            </li>
            <li>
              <span>
                <FaCarAlt />
              </span>
              I am a massive automotive enthusiast and take up automotive
              detailing in my free time. I would love to eventually get into
              autocross or amateur racing.
            </li>
            <li>
              <span>
                <FaStopwatch />
              </span>
              I am very interested in horology and love colleting watches.
            </li>
            <li>
              <span>
                <FaGamepad />
              </span>
              When I have free time I enjoy PC gaming! Feel free to add me on
              Steam @jimmyd233
            </li>
            <li>
              <span>
                <FaMotorcycle />
              </span>
              Although I no longer ride when I was in college I loved buying,
              repairing, and customizing cheap motorcycles then flipping them
              for a profit. I think this is partly where my enthusiasm for
              problem solving and building things came from.
            </li>
          </ul>
          <PageNav />
        </div>
      </div>
    </Layout>
  )
}
