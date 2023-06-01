import { instance } from "../../common/api/common.api"

export const authApi = {
  register(data: ArgRegisterType) {
    return instance.post<ResponseRegisterType>("/auth/register", data)
  },
  login(data: ArgLoginType) {
    return instance.post<ProfileType>("/auth/login", data)
  },
}

export type ResponseRegisterType = {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  __v: number
}

export type ProfileType = {
  created: string
  email: string
  isAdmin: boolean
  name: string
  publicCardPacksCount: number
  rememberMe: boolean
  token: string
  tokenDeathTime: number
  updated: string
  verified: boolean
  __v: number
  _id: string
}

export type ArgRegisterType = {
  email: string
  password: string
}

export type ArgLoginType = {
  email: string
  password: string
  rememberMe: boolean
}
