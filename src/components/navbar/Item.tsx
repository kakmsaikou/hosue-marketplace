import { FunctionComponent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface ItemProps {
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  path: string;
  content: string;
}

const Item = ({ Icon, path, content }: ItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMathRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <li
      className='navbarListItem'
      onClick={() => {
        navigate(path);
      }}
    >
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
  );
};

export default Item;
