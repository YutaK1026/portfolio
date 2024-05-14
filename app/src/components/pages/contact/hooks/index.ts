type useContact = () => {
  title: string
}

export const useContact: useContact = () => {
  const title = "Contact"

  return {
    title
  }
}