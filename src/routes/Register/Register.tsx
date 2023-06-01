import { useAppDispatch } from "../../app/hooks"
import { authThunks } from "../../features/auth/auth.slice"
import s from "./Register.module.css"

export const Register = () => {
  const dispatch = useAppDispatch()

  const registerHandler = () => {
    dispatch(
      authThunks.register({
        email: "nya-admisdfn@nya.nya",
        password: "1qazxsdfcvBG",
      }),
    )
  }

  return (
    <div className={s.container}>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  )
}
