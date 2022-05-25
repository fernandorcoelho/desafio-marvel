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

  useEffect(() => {
    comics && setComicsArr(comics);
    // Salva o array de comics no estado
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
  // Adiciona mais comics ao array de comics

  return (
    <>
      <MetaTags
        title="Home | Marvel 360º"
        description="Encontre seu quadrinho favorito na Marvel 360º"
        image="/favicon.png"
      />
      {/* SEO - MetaTags para a página */}

      <S.Container>
        <S.InfoSection>
          <h1>
            Clique no seu quadrinho favorito <img src="logo.png" id="logo" />{' '}
            para saber mais
          </h1>
        </S.InfoSection>
        {/* Sessão informativa */}

        <S.CardContainer>
          {comicsArr?.length > 0 &&
            comicsArr?.map((item) => (
              <Card
                key={String(item?.id)}
                title={item?.title}
                description={item?.description}
                src={
                  item?.thumbnail?.path ===
                  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
                    ? 'logo.png'
                    : `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`
                }
              />
            ))}
        </S.CardContainer>
        {/* Renderização dos cards */}

        <S.MoreButton onClick={() => handleMoreComics()}>
          <span>Ver mais</span> <RiAddFill />
        </S.MoreButton>
        {/* Botão para carregar mais dados dos quadrinhos */}
      </S.Container>
    </>
  );
};

export default Home;

// Static-Site Generation - Next.js para chamada da API
export const getStaticProps: GetStaticProps = async () => {
  const { data: comics } = await api.get('/comics');

  return {
    props: { comics: comics?.data?.results },
    revalidate: 60 * 60 * 24 // 1 dia
  };
};
