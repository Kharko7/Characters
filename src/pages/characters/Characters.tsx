import styles from './Characters.module.scss';
import TextField from 'components/text-field/TextField';
import Card from './card/Card';
import { useCharacters } from 'hooks/use-characters';

const Characters = () => {
  const { characters, inputValue, handleChangeValue } = useCharacters();

  return (
    <div className={styles.container}  >
      <div className={styles.logo} />
      <TextField
        value={inputValue}
        onChange={handleChangeValue}
        placeholder='Filter by name...'
      />
      <div className={styles.cardsBody} >
        {characters.length
          ? characters.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              species={character.species}
              image={character.image}
              id={character.id} />
          ))
          : <h1>Characters not found</h1>
        }
      </div>
    </div>
  );
};

export default Characters;