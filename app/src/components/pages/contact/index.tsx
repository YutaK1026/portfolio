import ContactForm from "@/components/pages/contact/presentations/contact-form"
import Title from "@/components/title"
import { useContactTitle } from "@/components/pages/contact/hooks/index"

export default function Contact() {
  const {title} = useContactTitle()

  return (
    <div>
      <Title name={title}/>
      <ContactForm />
    </div>
  )
}
