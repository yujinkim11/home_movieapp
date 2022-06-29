import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../constants/constant";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigation } from "swiper";
import "swiper/css/navigation";

const Container = styled.div`
  margin-top: 120px;
`;
const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;
const MovieImg = styled.div`
  height: 250px;
`;

const MovieTitle = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;

export const Movies = ({ movieData, title }) => {
  const params = {
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Swiper modules={[Navigation]} navigation {...params}>
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/detail/${play.id}`}>
              <MovieImg
                style={{
                  background: `url(${
                    play.backdrop_path
                      ? `${imgUrl}/${play.backdrop_path}`
                      : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                  }) no-repeat center / cover`,
                }}
              />
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
