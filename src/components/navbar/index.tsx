import { ReactComponent as OfferIcon } from '../../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../../assets/svg/personOutlineIcon.svg';
import Item from './Item';

const NavBar = () => {
  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <Item Icon={ExploreIcon} path='/' content='Explore' />
          <Item Icon={OfferIcon} path='/offers' content='Offer' />
          <Item Icon={PersonOutlineIcon} path='/profile' content='Profile' />
        </ul>
      </nav>
    </footer>
  );
};

export default NavBar;
