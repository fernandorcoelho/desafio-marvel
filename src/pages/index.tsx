import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import md5 from 'md5';
import axios from 'axios';

import * as S from 'styles/pages/index';
import { Card } from 'components/Card';
import Slider, { Settings } from 'react-slick';

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

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          autoplay: true
        }
      }
    ]
  };

  return (
    <S.Container>
      <Slider {...settings}>
        {marvelData.length > 0 &&
          marvelData.map(
            (item) =>
              item.description && (
                <S.CardContainer key={String(item.id)}>
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt=""
                  />

                  <Card title={item.title} />
                </S.CardContainer>
              )
          )}
      </Slider>
    </S.Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const publicKey = '7c9d0981ca0b182a60d9bab410e81c4f';
  const privateKey = 'bda1a3344a65c93ffa8aa22355c283048c9dfc8b';
  const ts = Number(new Date());
  const hash = md5(ts + privateKey + publicKey);

  const { data: marvelData } = await axios.get(
    `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );

  return {
    props: { marvelData: marvelData?.data?.results },
    revalidate: 60 * 60 * 24 // 1 dia
  };
};
