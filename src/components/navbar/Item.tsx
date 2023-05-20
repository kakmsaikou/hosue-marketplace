import { FunctionComponent } from 'react';
import { Link, Location } from 'react-router-dom';

interface ItemProps {
  icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  path: string;
  content: string;
  location: Location
}

const Item = ({ icon: Icon, path, content, location }: ItemProps) => {
  const pathMathRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <Link to={path}>
      <li className='navbarListItem'>
        <Icon
          fill={pathMathRoute(path) ? '#2c2c2c' : '#8f8f8f'}
          width='36px'
          height='36px'
        />
        <p
          className={
            pathMathRoute(path)
              ? 'navbarListItemNameActive'
              : 'navbarListItemName'
          }
        >
          {content}
        </p>
      </li>
    </Link>
  );
};

export default Item;
