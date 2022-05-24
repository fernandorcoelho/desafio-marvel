import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import md5 from 'md5';
import axios from 'axios';

import * as S from 'styles/pages/index';
import { Card } from 'components/Card';
import MetaTags from 'components/MetaTags';
import { api } from 'services/client';

interface ComicProps {
  id: number;
  title: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

interface HomeProps {
  marvelData: ComicProps[];
}

const Home: NextPage = ({ marvelData }: HomeProps) => {
  const router = useRouter();
  console.log(marvelData);

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <S.Container>
      <MetaTags
        title="Home | Marvel 360º"
        description="Encontre seu quadrinho favorito na Marvel 360º"
        image="/favicon.png"
      />

      <S.Header>
        <p>
          Clique no seu quadrinho <strong>Marvel</strong> favorito para saber
          mais
        </p>
      </S.Header>
      <S.CardContainer>
        {marvelData?.length > 0 &&
          marvelData?.map(
            (item) =>
              item?.description && (
                <Card
                  key={String(item?.id)}
                  title={item?.title}
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                />
              )
          )}
      </S.CardContainer>
    </S.Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data: marvelData } = await api.get('/comics');

  return {
    props: { marvelData: marvelData?.data?.results },
    revalidate: 60 * 60 * 24 // 1 dia
  };
};
