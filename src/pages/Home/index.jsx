/* ------------------ COMPONENTS -------------------*/
import Image from 'next/image'
import Head from 'next/head'

/* ------------------ IMAGES -------------------*/
import buildings from '../../assets/buildings.jpg' 
import plan from '../../assets/plan.png' 
import twitter from '../../assets/social-media/twitter_icon.png'
import face from '../../assets/social-media/face_icon.png'
import insta from '../../assets/social-media/insta_icon.png'

/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

export default function Home(props) {
  function getTheme() {
    return props.theme ? "" : "dark"
  }
  function getHomeTheme() {
    return props.theme ? "" : "dark_card_container"
  }

  return (
    <div className={styles.home_body}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <div className={styles.cover_page_container}>
        <div className={styles.image_container}>
          <Image src={buildings} layout='fill' objectFit="cover" alt='Prédios'
          className={styles.cover_page_image}/>
        </div>
        <h1 className={`${styles.title} position-absolute top-50 start-50 translate-middle text-center`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ducimus harum quae, hic, perferendis doloribus voluptatibus est illo rem consectetur</h1>
      </div>
      <section className={`${styles.container} ${styles[getTheme()]} d-flex justify-content-center`}> 
        <div>
          <p className={`${styles.content} text-center`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae consectetur itaque alias vel est doloremque maiores illum molestias esse eligendi, magnam iusto, vero animi perspiciatis. Dignissimos tenetur id reiciendis aliquid.
          </p>
        </div>
      </section>
      <section>
        <div className={`${styles.cards_container} ${styles[getHomeTheme()]} d-lg-flex justify-content-lg-around`}>
          <div className={`${styles.card} text-center col-12 col-lg-3 `}>
            <Image src={plan} width={100} height={100} alt="Imagem ilustrativa qualquer"/>
            <h3>Service</h3>
            <p>Service description. Service description.S ervice description. Service description. Service description. Service description. Service description. Service description. Service description.</p>
          </div>
          <div className={`${styles.card} text-center col-12 col-lg-3`}>
            <Image src={plan} width={100} height={100} alt="Imagem ilustrativa qualquer" />
            <h3>Service</h3>
            <p>Service description. Service description. Service description. Service description. Service description. Service description. Service description. Service description. Service description.</p>
          </div>
          <div className={`${styles.card} text-center col-12 col-lg-3`}>
            <Image src={plan} width={100} height={100} alt="Imagem ilustrativa qualquer" />
            <h3>Service</h3>
            <p>Service description. Service description. Service description. Service description. Service description. Service description. Service description. Service description. Service description.</p>
          </div>
        </div>
      </section>
      <footer className={`${styles.footer} d-flex justify-content-center`}>
        <div className={`${styles.container_footer} container text-center`} >
          <div className={`${styles.social_medias_container} row d-flex justify-content-around`} >
            <Image src={twitter} width={70} height={70} className={`${styles.social_media_icon}`} />
            <Image src={insta} width={70} height={70} className={`${styles.social_media_icon}`} />
            <Image src={face} width={70} height={70} className={`${styles.social_media_icon}`} />
          </div>
          <div className={`row d-flex justify-content-around`}>
            <nav>
              <ul className={`d-flex justify-content-center`}>
                <li className={`${styles.footer_link}`} ><a href="#">Info</a></li>
                <li className={`${styles.footer_link}`} ><a href="#">Suporte</a></li>
                <li className={`${styles.footer_link}`} ><a href="#">Marketing</a></li>
              </ul>
            </nav>
          </div>
          <div className={`row d-flex justify-content-around`}>
            <nav>
              <ul className={`d-flex justify-content-center`}>
                <li className={`${styles.footer_link_politics}`} ><a href="#">Termos de uso</a></li>
                <li className={`${styles.footer_link_politics}`} ><a href="#">Política de Privacidade</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer> 
    </div>
  )
}