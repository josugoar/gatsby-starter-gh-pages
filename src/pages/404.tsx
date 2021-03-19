import { Link } from "gatsby"
import React from "react"

const NotFoundPage = () => (
<<<<<<< HEAD
  <main>
=======
  <main className="font-mktg">
    <title>Page not found</title>
>>>>>>> f74b74906b3cdbb009924899700e77dd22acdb0c
    <div
      className="position-relative"
      style={{ zIndex: 0, transition: "all 0.25s easi-in" }}
    >
<<<<<<< HEAD
      <title>Page not found</title>
      <h1 style={{ fontSize: 128 }}>404</h1>
      <p style={{ fontSize: 16 }}>Page not found</p>
=======
      <div
        className="position-relative d-flex my-0 mx-auto overflow-hidden"
        style={{
          width: "100vh",
          height: "100vh",
          clear: "both",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: 125 }}>404</h1>
        <p style={{ width: 215, fontSize: 30, fontWeight: "bold" }}>
          This is not the web page you are looking for.
        </p>
        <Link style={{ marginTop: 20, fontSize: 20 }} to="/">
          Go home
        </Link>
      </div>
>>>>>>> f74b74906b3cdbb009924899700e77dd22acdb0c
    </div>
  </main>
)

export default NotFoundPage
