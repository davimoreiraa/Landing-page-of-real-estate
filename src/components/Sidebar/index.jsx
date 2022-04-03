/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Image from 'next/image'

/* ------------------ IMAGES -------------------*/
import logo from '../../assets/logo.png' 

/* ------------------ ICONS -------------------*/
import { AiOutlineClose } from 'react-icons/ai';
import { BsBuilding } from 'react-icons/bs'; 
import { FaDollarSign } from 'react-icons/fa'; 
import { BsFillTelephoneFill } from 'react-icons/bs'; 

export default function Sidebar(props) {
  function getTheme() {
    return props.theme ? "" : "dark"
  }

  return (
    <div className={`${styles.sidebar_body} ${props.sidebar ? styles.disable : ""} ${styles[getTheme()]} position-fixed top-0 start-0 `}>
      <div className={`d-flex justify-content-between d-flex align-items-center`} > 
        <div className={`${styles.container_logo} d-flex align-items-center`}>
          <Image src={logo} alt='Logo' width={234} height={100} onClick={props.checkMenu}/>
        </div>
        <div className={`${styles.close_icon_container}`} onClick={props.showSidebar} >
          <AiOutlineClose className={styles.close_icon}/>
        </div>
      </div>
      <div className={styles.line}></div>
      <nav>
        <ul>
          <li className={`${styles.nav_item}`}>
            <a href="#" className={`${styles[getTheme()]}`}>
              <span className={`${styles.nav_icon} ${styles[getTheme()]}`}>
                <BsBuilding/>
                </span>
                Projects
            </a>
          </li>
          <li className={`${styles.nav_item}`}>
            <a href="#" className={`${styles[getTheme()]}`}>
              <span className={`${styles.nav_icon} ${styles[getTheme()]}`}>
                <FaDollarSign/>
                </span>
                Prices
             </a>
          </li>
          <li className={`${styles.nav_item}`}>
            <a href="#" className={`${styles[getTheme()]}`}>
              <span className={`${styles.nav_icon} ${styles[getTheme()]}`}>
                <BsFillTelephoneFill/>
                </span>
                Contacts
            </a>
          </li>
        </ul>
      </nav>
      <div>
          <select name="language" id="language" className={`${styles.language_selector} form-select`}>
             <option value="en">English</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
          </select>
        </div>
    </div>
  )
}