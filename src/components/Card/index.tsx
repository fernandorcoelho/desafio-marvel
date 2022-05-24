import * as S from './styles';

interface CardProps {
  title: string;
  src: string;
}

export const Card = ({ title, src }: CardProps) => {
  return (
    <S.Container>
      <img src={src} alt={title} />

      <S.InfoContainer>
        <S.Title>{title}</S.Title>
      </S.InfoContainer>
    </S.Container>
  );
};
