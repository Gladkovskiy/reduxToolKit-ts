export interface IUsers {
  id: number
  name: string
  email: string
}

export interface UserState {
  users: IUsers[]
  isLoading: boolean
  error: string
}
