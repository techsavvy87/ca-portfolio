import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import githubIcon from '../../assets/github.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://vinayaksingh.in" className="logo">
        <span>www.vinayak</span>
        <span>singh.in</span>
      </a>
      <div>
        <p>
          Built with React, TypeScript, and Vite <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://github.com/CodeVinayak/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
}
