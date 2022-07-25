export type LoginBase = {
  email: string
  password: string
}

export interface ILogin extends LoginBase {
  remember: boolean
}

export interface ILoginRes {
  id: number
  username: string
  email: string
  mobile: string
  avatar: string
  referral: string
  token: string
  auto: number | string
}
