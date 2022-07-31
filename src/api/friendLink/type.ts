export type BaseType = {
  name: string
  referral: string
  cover: string
  link: string
}

export interface FriendLinkType extends BaseType {
  id: number
}
