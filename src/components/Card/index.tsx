import { useState } from 'react';

import * as S from './styles';

interface CardProps {
  title: string;
  description: string;
  src: string;
}

export const Card = ({ title, description, src }: CardProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.Container onClick={() => setIsActive(!isActive)}>
      <S.Thumbnail src={src} />

      <S.InfoContainer>
        <S.Title>{title}</S.Title>
        <S.Description className={isActive && 'active'}>
          {!description ? 'Descrição não disponível' : description}
        </S.Description>
      </S.InfoContainer>
    </S.Container>
  );
};
