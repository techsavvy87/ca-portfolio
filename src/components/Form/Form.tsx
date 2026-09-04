import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { FormEvent, useState } from 'react'
import validator from 'validator'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSucceeded, setHasSucceeded] = useState(false)

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })

      if (!response.ok) {
        throw new Error('Unable to send email')
      }

      setHasSucceeded(true)
      toast.success('Email successfully sent!', {
        position: 'bottom-left',
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    } catch {
      toast.error('Unable to send your message. Please try again later.', {
        position: 'bottom-left',
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'failed',
      })
    } finally {
      setIsSubmitting(false)
    }
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
        />
        <button
          type="submit"
          disabled={isSubmitting || !validEmail || !message}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
