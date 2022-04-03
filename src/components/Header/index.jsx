/* ------------------ COMPONENTS -------------------*/
import Image from 'next/image'
import Head from 'next/head'

/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ IMAGES -------------------*/
import logo from '../../assets/logo.png' 
 
/* ------------------ ICONS -------------------*/
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header(props) {
  function getTheme() {
    return props.theme ? "" : "dark"
  }

  return (
  <div className={`${styles.header_body} ${styles[getTheme()]} fixed-top d-inline-flex align-items-center justify-content-between`}>
    <Head>
       <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet"/>
    </Head>
    <div className={`d-inline-flex d-flex align-items-center`}>
        <span className={`${styles.menu_button_container} d-lg-none d-xl-none d-xxl-none`} 
        onClick={props.showSidebar}
       >
        <AiOutlineMenu className={styles.menu_button}/>
          </span> 
      <div className={`${styles.container_logo} d-flex align-items-center`}>
        <Image src={logo} alt='Logo' width={187} height={80}/>
      </div>
      <div className={`d-flex align-items-center`}>
        <div className={`${styles.services_list_container} d-flex d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block `}>
          <nav >
            <ul className={`${styles.nav_link_list} d-inline-flex`}>
              <li className={`col-4`}><a className={`${styles.nav_item}`}>Projects</a></li>
              <li className={`col-4`}><a className={`${styles.nav_item}`}>Prices</a></li>
              <li className={`col-4`}><a className={`${styles.nav_item}`}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div className={`${styles.options_container} d-inline-flex d-flex justify-content-between`}>
      <div className={`${styles.language_container} align-items-center`}>
        <div>
          <select name="language" id="language" className={`${styles.language_selector} form-select d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block`}>
            <option value="en">English</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>
      <div className={`${styles.dark_mode_container} align-items-center`}>
        <button type="button" onClick={() => props.changeTheme()} className={`${styles.toggle_button} btn btn-dark `}>Dark mode</button>
      </div>
    </div>
  </div>
  )
}