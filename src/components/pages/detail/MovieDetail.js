import { mainStyle } from "../../../styles/globalStyle";
import { imgUrl } from "../../../constants/constant";
import styled from "styled-components";
import { useState } from "react";

const DetailWrap = styled.div`
  padding: ${mainStyle.padding};
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    display: block;
    padding: ${mainStyle.moPadding};
  }
`;

const DetailImg = styled.div`
  width: 45%;
  height: 700px;
  background-color: white;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 65vh;
    margin-top: 25%;
  }
`;

const ConWrap = styled.div`
  margin-left: 50px;
  width: 45%;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-top: 20px;
    margin-left: 0;
  }
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 40px;
`;

const Date = styled.li`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  list-style: none;
`;

const Genres = styled.ul`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  display: flex;
  li {
    list-style: none;
    margin-right: 10px;
  }
  margin: 0 0 20px 0px;
`;

const Time = styled.li`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  list-style: none;
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 200;
  line-height: 2rem;
  opacity: 0.8;
  margin-top: 80px;
`;

const Button = styled.div`
  cursor: pointer;
  width: 180px;
  height: 50px;
  margin-top: 50px;
  border: 1px solid white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MovieDetail = ({ movieData }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: 800,
    });
  };

  return (
    <DetailWrap>
      <DetailImg
        style={{
          background: `url(${
            movieData.backdrop_path
              ? `${imgUrl}/${movieData.backdrop_path}`
              : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
          }) no-repeat center /  cover`,
        }}
      ></DetailImg>

      <ConWrap>
        <Title>{movieData.title}</Title>
        <Genres>
          {movieData.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </Genres>
        <Date>{movieData.release_date}일 개봉</Date>
        <Time>{movieData.runtime} 분</Time>

        <Desc>{movieData.overview}</Desc>
        <Button onClick={handleScroll}>예고편 보기</Button>
      </ConWrap>
    </DetailWrap>
  );
};
