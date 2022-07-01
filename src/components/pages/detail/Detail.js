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
  margin-left: 50px;
`;
const DetailTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 40px;
`;

const DetailDate = styled.li`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  list-style: none;
`;
const DetailGenre = styled.div`
  margin-top: 20px;
`;
const DetailTime = styled.li`
  font-size: 20px;
  font-weight: 600;

  list-style: none;
`;
const DetailDesc = styled.div`
  font-size: 18px;
  font-weight: 200;
  line-height: 2rem;
  opacity: 0.8;
  margin-top: 80px;
`;

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
        <DetailTime>{movieData.runtime}분</DetailTime>
        <DetailGenre>
          {movieData.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </DetailGenre>

        <DetailDesc>{movieData.overview}</DetailDesc>
      </Right>
    </DetailWrap>
  );
};
