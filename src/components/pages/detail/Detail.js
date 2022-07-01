import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { useParams } from "react-router";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { ScrollTop } from "../../../ScrollTop";
import { MovieDetail } from "./MovieDetail";
import styled from "styled-components";

import { PageTitle } from "../../PageTitle";

const Iframe = styled.iframe`
  width: 100%;
  height: 700px;
  margin-top: 150px;
  @media screen and (max-width: 500px) {
    height: 60vh;
    margin-top: 100px;
  }
`;

export const Detail = () => {
  const [movieData, setmovieData] = useState();
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // => useParams는 URL 주소에 있는 변수 값을 가져옴
  // console.log(id);

  useEffect(() => {
    const detailData = async () => {
      const { data } = await movieApi.movieDetail(id);
      setmovieData(data);
      setLoading(false);

      const {
        data: { results },
      } = await movieApi.video(id);
      setVideoData(results.length === 0 ? null : results[0].key);
      setLoading(false);
    };

    detailData();
  }, []);

  console.log(videoData);

  return (
    <div>
      <PageTitle title={"Detail"} />
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {movieData && <MovieDetail movieData={movieData} />}
          {videoData ? (
            <Iframe
              src={`https://www.youtube.com/embed/${videoData}`}
              allowfullscreen
            ></Iframe>
          ) : null}
        </Container>
      )}
    </div>
  );
};
