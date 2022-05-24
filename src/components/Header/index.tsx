import Link from 'next/link';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="Marvel Logo" />
        </a>
      </Link>
    </S.Container>
  );
};
