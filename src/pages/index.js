import React from "react"
import Layout from "../components/layout-page"
import SEO from "../components/seo"
import Project from "../components/project"
import dj from "../images/dj.jpg"
import pokemon from "../images/pokemon4.jpg"
import carWash from "../images/carwash.jpg"
import htc from "../images/htc.png"
import purdue from "../images/purdue.jpg"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <Project
          name="Wash Me"
          image={carWash}
          href="https://wash-me-client.herokuapp.com/home"
          source="Wash-Me-Client"
          technology={["Angular", "Node", "Postgres", "Express", "Material UI"]}
          overview={`Wash Me is an entrepreneurial idea that I have been wanting to work on for for a while and decided to complete as my capstone project for Eleven Fifty. Wash Me is a peer to peer automotive detailing application created with the intent of making it easier for people to connect with hobby automotive detailers in order to have their vehicle detailed at a cheaper price, and with more flexibility, than going through a professional service. This project was the largest project I had taken on to date and was completed with a team that included two of my fellow classmates from Eleven Fifty. I took on a leadership role while completing this project, and handled the wireframing of the project, the planning of what components would be necessary, the design of how said components would operate, and the delegation of tasks to the teammate whos abilities best suited said task.`}
          roles={[
            "Team Leader",
            "Lead Developer",
            "Data Architect",
            "Git Master",
          ]}
          original=""
        />
        <Project
          name="Purdue Polytechnic Highschool Application"
          image={purdue}
          href=""
          source=""
          technology={[
            "React",
            "GraphQL",
            "Apollo",
            "Postgraphile",
            "GraphiQL",
            "NextJs",
            "Material",
            "MomentJs",
          ]}
          overview={`This was one of the more interesting projects I have had the priveledge of working on during my time as a developer as well as one of my strongest learning experience. While working at Pearcircuit we were tasked with creating an application that could handle all of the goings on at Purdue Polytechnic Highschool. This included students scheduling their optional classes each week, setting up qr readers for students to scan in and out of school, allow teachers to take attendance, allow administrators to create classes, and much more. We were basically responsible for creating a web application that would run the entire school and all the development work fell on me and one other junior developer. While completing this project I learned many new technologies most notably, GraphQL, which I absolutely fell in love with. This project was my first time experiencing a true period of crunch. We had a little over a month to complete this project with all of the core functionality in place so that PPHS could begin school on time. In addition to this we had to deal with changing requirments from our client right up until the final week. In the end the project was completed on time with full functionality and I was very proud of my work. Unfortunately since this is a privately owned application I am unable to share source code or an example of the working site.`}
          roles={[
            "Developer responsible for all the functions/views of the 'student' and 'teacher' user rolls",
          ]}
          original=""
        />
        <Project
          name="Here To Career Redesign"
          image={htc}
          href="https://here-to-career-staging.herokuapp.com/"
          original="https://drive.google.com/drive/folders/1QHeyyW_lLFFWx8P_0Ty8Zktn1FM_hawU?usp=sharing"
          source=""
          technology={["React", "Material", "Redux", "CSS"]}
          overview={`This is the first project I completed while doing contract work for a consulting firm called PearCircuit. After a redesign had been planned for California Comunity Colleges "Here to Career" website, I was given the source code, told to look over some wireframes, and then asked to make them match. This project was a great experience for me because it was my first time working in an environment where I had not written any of the initial code and was not familiar with some of the technologies/procedures used. While completing this project I really exercised my code comprehension skills, problem solving abilities, and CSS skills. This was also a great opportunity to gain some experience with interacting with clients. Since I was the sole developer working on this project I was responsible for communicating with the client, presenting my progress with them at bi-weekly standups, and letting them know about anything I needed to complete the project. I was very happy with the outcome of this website and think I gained a lot of valuable experience while working on it.`}
          roles={["Redesign Developer", "Client Manager"]}
        />
        <Project
          name="Beat Share"
          image={dj}
          href="https://blue-final-project-client.herokuapp.com/"
          source="Beat-Share-Client"
          technology={[
            "React",
            "Node",
            "Postgres",
            "Express",
            "ReactStrap",
            "Radium",
          ]}
          overview={`Beat Share is a fully functional social media website focused on the sharing and discussion of electronic music. Beat Share is the first project I have developed using React as well as the first project I have worked on that utilizes a Node back-end. Developing this website really helped me understand the power of React, specifically its modularity. Many of the pages on Beat Share are composed using the same base components. This helped me develop a knowledge of efficient code reuse and make the development of this project very streamlined. Utilizing Node was also very exciting for me because it allowed me to create a very interactive website with a high level of functionality.`}
          roles={["Sole Developer", "Sole Designer"]}
          original=""
        />
        <Project
          name="Who's That Pokemon!?"
          image={pokemon}
          href="https://james-dora-whos-that-pokeapi.firebaseapp.com/"
          source="Whos-That-Pokemon"
          technology={["Javascript", "HTML", "CSS", "Rest API"]}
          overview={`This game is a personal project I developed using the PokeAPI. It selects a random pokemon from the API and uses a css filter to display a silouhette of said Pokemon. The player then has an opportunity to guess what the Pokemon is before the Pokemon is revealed and the player is told whether they are right or wrong. This game was meant to imitate the game which would appear on the Pokemon television show. This is the first website I ever developed which utilized complex javascript as well as interacting with an API`}
          roles={["Sole Developer", "Sole Designer"]}
          original=""
        />
      </div>
    </Layout>
  )
}
