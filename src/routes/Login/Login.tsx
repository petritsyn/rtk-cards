import React from "react"
import { useAppDispatch } from "@/app/hooks"
import { authThunks } from "@/features/auth/auth.slice"

export const Login = () => {
  const dispatch = useAppDispatch()

  const loginHandler = () => {
    dispatch(
      authThunks.login({
        email: "nya-admisdfn@nya.nya",
        password: "1qazxsdfcvBG",
        rememberMe: true,
      }),
    )
  }

  return (
    <div>
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}
