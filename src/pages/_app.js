/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ STYLES -------------------*/
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

/* ------------------ COMPONENTS -------------------*/
import Head from 'next/head'
import Header from '../components/Header/index'
import Sidebar from '../components/Sidebar/index'
import Home from '../pages/Home/index'

function MyApp({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(true)
  const [theme, setTheme] = useState(true)
  function showSidebar() {
    setSidebar(!sidebar)
  }
  function changeTheme() {
    setTheme(!theme)
    console.log(theme)
  }

  return (
    <>
      <Head>
        <title>Imobiliária</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
      </Head>
      <Header
        showSidebar={showSidebar}
        changeTheme={changeTheme}
        theme={theme}
      />
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} theme={theme} />
      <Home changeTheme={changeTheme} theme={theme} />
      <Component {...pageProps} />
    </>
  )
}

//arrumar path do icone da pagina
export default MyApp
