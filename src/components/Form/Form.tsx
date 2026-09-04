import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { FormEvent, useState } from 'react'
import validator from 'validator'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSucceeded, setHasSucceeded] = useState(false)
  const validMessage = message.trim().length > 0

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate the delay of a real request without transmitting or storing data.
    await new Promise((resolve) => window.setTimeout(resolve, 900))

    setIsSubmitting(false)
    setHasSucceeded(true)
    toast.success('Message successfully submitted!', {
      position: 'bottom-left',
      pauseOnFocusLoss: false,
      closeOnClick: true,
      hideProgressBar: false,
      toastId: 'succeeded',
    })
  }

  if (hasSucceeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }
  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={submitForm}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          maxLength={254}
          autoComplete="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          maxLength={5000}
        />
        <button
          type="submit"
          disabled={isSubmitting || !validEmail || !validMessage}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
