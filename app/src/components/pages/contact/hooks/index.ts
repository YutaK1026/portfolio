type useContactProps = () => {
  title: string
}

export const useContact: useContactProps = () => {
  const title = "Contact"

  return {
    title
  }
}