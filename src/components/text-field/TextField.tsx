import styles from './TextField.module.scss'

interface TextFieldProps {
  value: string;
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ value, onChange, placeholder }: TextFieldProps) => {

  return (
    <input
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default TextField