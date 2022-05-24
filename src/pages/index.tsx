import { useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { RiAddFill } from 'react-icons/ri';

import { api } from 'services/client';
import { Card } from 'components/Card';
import MetaTags from 'components/MetaTags';

import * as S from 'styles/pages/index';

interface ComicsProps {
  id: number;
  title: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

interface HomeProps {
  comics: ComicsProps[];
}

const Home: NextPage = ({ comics }: HomeProps) => {
  const [comicsArr, setComicsArr] = useState<ComicsProps[]>([]);
  console.log(comics);

  useEffect(() => {
    comics && setComicsArr(comics);
  }, []);

  const handleMoreComics = async () => {
    try {
      const offset = comics.length;

      const { data } = await api.get('/comics', {
        params: {
          offset
        }
      });

      setComicsArr([...comicsArr, ...data.data.results]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MetaTags
        title="Home | Marvel 360º"
        description="Encontre seu quadrinho favorito na Marvel 360º"
        image="/favicon.png"
      />

      <S.Container>
        <S.Header>
          <h1>
            Encontre seu quadrinho <img src="logo.png" id="logo" /> favorito
          </h1>
          <S.SearchInputContainer>
            <input type="text" />
          </S.SearchInputContainer>
        </S.Header>

        <S.InfoSection>
          <h1>
            Clique no seu quadrinho favorito <img src="logo.png" id="logo" />{' '}
            para saber mais
          </h1>
        </S.InfoSection>
        <S.CardContainer>
          {comicsArr?.length > 0 &&
            comicsArr?.map(
              (item) =>
                item?.description && (
                  <Card
                    key={String(item?.id)}
                    title={item?.title}
                    description={item?.description}
                    src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                  />
                )
            )}
        </S.CardContainer>

        <S.MoreButton onClick={() => handleMoreComics()}>
          <span>Ver mais</span> <RiAddFill />
        </S.MoreButton>
      </S.Container>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data: comics } = await api.get('/comics');

  return {
    props: { comics: comics?.data?.results },
    revalidate: 60 * 60 * 24 // 1 dia
  };
};
