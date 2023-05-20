import { ReactComponent as OfferIcon } from '../../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../../assets/svg/personOutlineIcon.svg';
import Item from './Item';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <Item
            location={location}
            icon={ExploreIcon}
            path='/'
            content='Explore'
          />
          <Item
            location={location}
            icon={OfferIcon}
            path='/offers'
            content='Offer'
          />
          <Item
            location={location}
            icon={PersonOutlineIcon}
            path='/profile'
            content='Profile'
          />
        </ul>
      </nav>
    </footer>
  );
};

export default NavBar;
