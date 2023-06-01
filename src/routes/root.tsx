import { Link, Outlet } from "react-router-dom"

export default function Root() {
  return (
    <>
      <div id="header">
        <header>
          <button>sing in</button>
        </header>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
