import { NavLink, useLocation } from 'react-router-dom';

import styles from './Card.module.scss';
import TitleAndSubtitle from 'components/title-and-subtitle/TitleAndSubtitle';

interface CardProps {
  name: string;
  species: string;
  id: number;
  image: string;
}

const Card = ({ name, species, id, image }: CardProps) => {
  const location = useLocation();

  return (
    <div className={styles.paper}>
      <NavLink
        to={`/character/${id}`}
        state={{ from: location }}
        className={styles.container}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={styles.img} />
        <div className={styles.userInfo}>
          <TitleAndSubtitle
            title={name}
            subtitle={species}
          />
        </div>
      </NavLink>
    </div>
  );

};

export default Card;