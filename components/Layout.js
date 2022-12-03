import Meta from './Meta'
import Nav from './Nav'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
    <Meta />
    
    <Header />
    <Nav />
    <div className='container'>
        <main className='row'>      
            {children}
        </main>
    </div>
    </>
  )
}
 
export default Layout
