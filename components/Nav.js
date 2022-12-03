import Link from 'next/link'

const Nav = ({cats}) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-secondary'>
      <div className='container'>
        <ul className='navbar-nav'>
          <li className='nav-item'><Link href='/' className='nav-link'>প্রচ্ছদ</Link></li>
          {console.log(cats)}
          {cats && cats.map(cat => ( 
          <li className='nav-item' key={cat.id}><Link href={`/${cat.id}`} className='nav-link'>{cat.name}</Link></li>
            )
          )}
        </ul>
      </div>
    </nav>
  )
}


export default Nav