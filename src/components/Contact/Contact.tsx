import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Building a website or mobile app?</p>
        <p>Let's connect and turn the idea into a reliable product.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:catherineregato@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:catherineregato@gmail.com">catherineregato@gmail.com</a>
        </div>
        <div>
        <a href="tel:+639185546139"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+639185546139">(+63) 918 554 6139</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
