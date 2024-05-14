import ContactForm from "@/components/pages/contact/presentations/contact-form"
import Title from "@/components/title"
import { useContact } from "@/components/pages/contact/hooks/index"

export default function Contact() {
  const {title} = useContact()

  return (
    <div>
      <Title name={title}/>
      <ContactForm />
    </div>
  )
}
