import { SetStateAction } from "react";
import { sendMailHandler } from "./send-mail";


type useContactProps = {
  setFormData:  (formData: SetStateAction<{
                  name: string;
                  email: string;
                  subject: string;
                  content: string;
                }>) => void;
  setIsSending: (sending: boolean) => void
  setMessage:   (message: string | null) => void
  formData:     {
                  name: string;
                  email: string;
                  subject: string;
                  content: string;
                }
}

export const useContact = ({
    setFormData,
    setIsSending,
    setMessage,
    formData,
  }: useContactProps) => {
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendMail = async () => {
    setIsSending(true);
    setMessage(null); // Clear any previous messages

    try {
      sendMailHandler({name: formData.name, email: formData.email, subject: formData.subject, content: formData.content})
      setMessage("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        content: "",
      });
    } catch (error: any) {
      // Handle any errors that occur during the API request
      setMessage("Error sending email: " + error.message);
    } finally {
      setIsSending(false);
    }
  };

  return {
    handleChange,
    handleSendMail
  }
}

export const useContactTitle = () => {
  const title = "お問い合わせフォーム"
  
  return {
    title
  }
}