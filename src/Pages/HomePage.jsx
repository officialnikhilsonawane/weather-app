import PageNav from '../components/PageNav'
import Header from '../components/Header'
import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'

export default function HomePage({ isLogin }) {

  return (
    <div className='back-img'>
        <Header>
          <Logo/>
          <PageNav/>
        </Header>
        <SearchBar/>
    </div>
  )
}
