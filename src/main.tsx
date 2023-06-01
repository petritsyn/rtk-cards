import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"
import ErrorPage from "./features/pages/error-page.jsx"
import Contact from "./routes/contact"
import { Login } from "./routes/Login/Login"
import { Register } from "./routes/Register/Register"
import { CheckEmail } from "./routes/CheckEmail"
import { Profile } from "./routes/Profile"
import { Packs } from "./routes/Packs"
import { Cards } from "./routes/Cards"
import { Learn } from "./routes/Learn"

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Root />,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "check",
        element: <CheckEmail />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "packs",
        element: <Packs />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "learn",
        element: <Learn />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
