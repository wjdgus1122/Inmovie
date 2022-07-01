import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { useParams } from "react-router";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { ScrollTop } from "../../../ScrollTop";
import { MovieDetail } from "./MovieDetail";
import styled from "styled-components";
import { videoUrl } from "../../../constants/constant";
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
  const [dt, setDt] = useState();
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  // =>url주소에 있는 변수값을 가져옴
  useEffect(() => {
    const mvdetail = async () => {
      const { data } = await movieApi.moviedetail(id);
      setDt(data);

      const {
        data: { results },
      } = await movieApi.movieVideo(id);
      setVideoData(results.length === 0 ? null : results[0].key);

      setLoading(false);
    };
    mvdetail();
  }, []);
  console.log(dt);
  return (
    <>
      {/* {console.log(dt && dt.title)} */}
      {dt && <PageTitle title={dt.title} />}
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {dt && <MovieDetail dt={dt} />}
          {videoData ? (
            <Iframe src={`${videoUrl}${videoData}`} allowfullscreen></Iframe>
          ) : null}
        </Container>
      )}
    </>
  );
};
