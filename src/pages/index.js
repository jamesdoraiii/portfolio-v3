import React from "react"
import Layout from "../components/layout-page"
import SEO from "../components/seo"
import Project from "../components/project"
import discoveryIMG from "../images/discovery-preview.jpg"
import mailIMG from "../images/mail-preview.jpg"
import isteIMG from "../images/iste-preview.jpg"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <Project
          name="Mentoring Minds Discovery Engine"
          image={discoveryIMG}
          href="https://discover.mentoringminds.com"
          source=""
          technology={["React", "Styled Components"]}
          overview={`The Discovery Engine is a sales tool for our customer-facing teams to deliver cohesive and geo-specific product presentations in the field and from our office. With this application, team members can select their profile and guide potential customers through our brand, research, traits, and more. As well as share samples of our multiple product offerings. Resulting in a professional presentation that has increased sales and customer engagement.`}
          roles="Collaborated and worked directly with key stakeholders to meet the needs of our sales and support teams. Sole designer and developer."
        />
        <Project
          name="Mentoring Minds Mail"
          image={mailIMG}
          href="https://github.com/edtechdeveloper/Mentoring-Minds-Mail-System"
          source="Mentoring-Minds-Mail-System"
          technology={["React", "MJML", "HTML", "Marketo"]}
          overview={`A custom email marketing system with nearly a dozen templates to cover all touchpoints and communication funnels. Including lead generation, customer nurture, event, product, content, and more. All templates work seamlessly with the Marketo platform and take advantage of their dynamic fields/syntax. Letting team members to easily create, customize, and deploy emails without the assistance of a developer.`}
          roles="Worked directly with the creative director and marketing manager to design, prototype, and wire-frame concepts. Sole developer."
        />
        <Project
          name="ISTE Standards"
          image={isteIMG}
          href="https://iste-standards.netlify.com/"
          source="ISTE-Standards"
          technology={["React", "Styled Components"]}
          overview={`A personal project highlighting the "International Society for Technology in Education" standards for students, educators, and education leaders. With this application users can reference and use the standards as a framework to cultivate an innovative learning environment for the digital age.`}
          roles="Personal project. Sole developer and designer."
        />
      </div>
    </Layout>
  )
}
