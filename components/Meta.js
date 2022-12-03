import Head from 'next/head'
import { icon, title, keywords, description } from '../config/index'

const Meta = ({ title, keywords, description, icon }) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name='keywards' content='দৈনিক প্রথম কথা, বাংলা জাতীয় দৈনিক' />
        <meta name='description' content='দৈনিক প্রথম কথা' />
        <link rel="icon" type="image/x-icon"  href={icon} />
    </Head>
  )
}

Meta.defaultProps = {
    title: title,
    keywords: keywords,
    description: description,
    icon: icon
}

export default Meta
