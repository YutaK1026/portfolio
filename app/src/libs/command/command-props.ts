export interface DatabaseProps{
  table:{
    kawachann: {
      about: {
        name: string
        created_at: string
        updated_at: string
      }
      work: {
        name: string
        created_at: string
        updated_at: string
      }
      skill: {
        name: string
        created_at: string
        updated_at: string
      }
      contact: {
        name: string
        created_at: string
        updated_at: string
      }
    }
  }
}

export interface ConsoleProps{
  text: string
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  setText: (value: string) => void
  is_disable: boolean
}

export interface TitleProps {
  name: string
}