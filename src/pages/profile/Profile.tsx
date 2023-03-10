import { useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from './Profile.module.scss';
import { useCharacterById } from 'hooks/use-character-by-id';
import { profileInfo } from 'constants/profileInfo';
import TitleAndSubtitle from 'components/title-and-subtitle/TitleAndSubtitle';

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const character = useCharacterById(params.id);
  const from = location.state?.from?.pathname || '';
  const goBack = () => navigate(from);

  const TitleAndSubtitleItems = profileInfo.map((title) => {
    let subtitle = 'Unknown';

    if (character !== null) {
      const value = character[title as keyof typeof character];
      if (typeof value === 'object' && !Array.isArray(value)) {
        subtitle = value.name;
      } else {
        subtitle = value as string || 'Unknown';
      };
    };

    return (
      <div
        key={title}
        className={styles.profileInfoBody}>
        <TitleAndSubtitle
          title={title}
          subtitle={subtitle}
        />
      </div>
    );
  });

  return (
    <div className={styles.container}>
      {from &&
        <div
          onClick={goBack}
          className={styles.goBack}
        >
          GO BACK
        </div>
      }
      <div className={styles.profileBody}>
        <img src={character?.image} alt='Avatar' />
        <h1 className={styles.profileName}>{character?.name}</h1>
        <h3 className={styles.profileInfoTitle}>Informations</h3>
        {TitleAndSubtitleItems}
      </div>
    </div>
  );
};

export default Profile;