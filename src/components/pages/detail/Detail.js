import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";

const DetailWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;
const Left = styled.div`
  width: 40%;
`;
const Right = styled.div`
  width: 40%;
  height: 700px;
`;
const DetailTitle = styled.div``;
const DetailDate = styled.div``;
const DetailGenre = styled.div``;
const DetailTime = styled.div``;
const DetailDesc = styled.div``;

export const Detail = () => {
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const detailData = async () => {
      const { data } = await movieApi.movieDetail(id);
      setMovieData(data);
      setLoading(false);
    };
    detailData();
  }, []);

  console.log(movieData);
  return (
    <DetailWrap>
      <Left
        style={{
          background: `url(${imgUrl}/${movieData.backdrop_path}) no-repeat center / cover`,
        }}
      ></Left>
      <Right>
        <DetailTitle>{movieData.title}</DetailTitle>
        <DetailDate>{movieData.release_date}</DetailDate>
        <DetailGenre>장르</DetailGenre>
        <DetailTime>{movieData.runtime}분</DetailTime>
        <DetailDesc>{movieData.overview}</DetailDesc>
      </Right>
    </DetailWrap>
  );
};
