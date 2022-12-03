import Link from 'next/link'
import Image from 'next/image'
import headerStyles from '../styles/Header.module.css'
import {logo, title, description} from '../config'

const Header = () => {
  return (
    <div className='container d-flex align-items-center'>
    
      <div className='col d-flex justify-content-sm-center justify-content-md-start'>
      sadfsd
      </div>

      <div className='col d-flex justify-content-sm-center'>
        <h1 className={headerStyles.logo}><Link href='/'><Image src={logo} alt={title} width='260' height='70' priority={true} /></Link> </h1>
      </div>

      <div className='col d-flex align-items-center justify-content-sm-center justify-content-md-end'>
    safsdf
    </div>
  </div>
  )
}

export default Header
