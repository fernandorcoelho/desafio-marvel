import * as S from './styles';

interface CardProps {
  title: string;
}

export const Card = ({ title }: CardProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
