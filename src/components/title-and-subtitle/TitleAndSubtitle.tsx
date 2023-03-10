interface CardProps {
  title: string;
  subtitle: string;
}

const TitleAndSubtitle = ({ title, subtitle }: CardProps) => {

  return (
    <>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </>
  );
};

export default TitleAndSubtitle;