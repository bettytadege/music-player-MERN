
import Logo from '../components/header/Logo'
import Search from '../components/header/Search'
import Profile from '../components/header/Profile'

function Header() {
  return (
    <>
      <header className="flex justify-between mx-3 pt-3">
        <Logo />
        <div className="flex-grow">
          <Search />
        </div>
        <Profile />
      </header>
    </>
  );
}

export default Header
