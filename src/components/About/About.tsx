import { Container } from "./styles";
import python from "../../assets/python.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export function About() {
  return (
    <Container id="about">
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src="/Images/cather.png" alt="Catherine Ambrad" />
        </ScrollAnimation>
      </div>
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Catherine, a Full Stack Web and Mobile Developer focused on building responsive websites and cross-platform mobile apps with clean, user-focused design.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I work across React, React Native, TypeScript, Node.js, REST APIs, and modern frontend stacks to turn complex requirements into reliable, polished products.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            My recent work spans full-stack web applications, cross-platform mobile apps, and building intuitive, high-performing user experiences from concept to deployment.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Computer Science &amp; Data Science</h4>
            <p>De La Salle University (DLSU) | 2010 - 2014</p>
            <p>Manila, Metro Manila</p>
            <p>Associate's degree in Computer Science &amp; Data Science</p>
            <br />
            <h4>Computer Science &amp; Mathematics</h4>
            <p>University of the Philippines Diliman | 2005 - 2009</p>
            <p>Quezon City, Metro Manila</p>
            <p>Bachelor of Science in Computer Science &amp; Mathematics</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>AI Marketing Automation Consultant</h4>
            <p>SKIDD PH | 05/2020 - 06/2026</p>
            <p>Angeles, Philippines</p>
            <ul>
              <li>Build automated workflows inside Go-High-Level and other CRM platforms</li>
              <li>Implement AI chatbots for website lead capture and qualification</li>
              <li>Deploy AI voice systems for appointment booking and customer engagement</li>
              <li>Optimize conversion rates through A/B testing and behavioral triggers</li>
              <li>Manage paid traffic sources and integrate them into automated pipelines</li>
              <li>Draft and distribute press releases to increase digital visibility</li>
              <li>Talking Websites + Web Funnel designs</li>
            </ul>
            <br />
            <h4>Senior Software Developer</h4>
            <p>Thinking Machines Data Science | 10/2019 - 04/2020</p>
            <p>Taguig, Metro Manila</p>
            <ul>
              <li>Designed Python applications for data processing and workflow automation.</li>
              <li>Built reusable mathematical libraries and reporting tools.</li>
              <li>Improved application performance through code optimization.</li>
              <li>Collaborated with engineering teams on scalable software solutions.</li>
            </ul>
            <br />
            <h4>Software Engineer</h4>
            <p>Aboitiz Data Innovation | 03/2018 - 08/2019</p>
            <p>Metro Manila</p>
            <ul>
              <li>Developed internal Python utilities for analytics and validation.</li>
              <li>Created SQL queries and automated operational reports.</li>
              <li>Maintained Linux-based production applications.</li>
              <li>Performed testing and code reviews.</li>
            </ul>
            <br />
            <h4>Python Developer</h4>
            <p>Stratpoint Technologies | 03/2017 - 11/2017</p>
            <p>Mandaluyong, Metro Manila</p>
            <ul>
              <li>Implemented data transformation pipelines using Python.</li>
              <li>Developed visualization dashboards for business users.</li>
              <li>Integrated APIs and automated recurring processes.</li>
              <li>Prepared technical documentation.</li>
            </ul>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={nodeIcon} alt="Node.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={mysqlIcon} alt="MySQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <img src={shopify} alt="Shopify" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Container>
  )
}
