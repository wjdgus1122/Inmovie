import { Container } from "../../Container";
import { PageTitle } from "../../PageTitle";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { movieApi } from "../../../api";
import { useState } from "react";
import { imgUrl } from "../../../constants/constant";
import { Loading } from "../../Loading";
import { Link } from "react-router-dom";

const SearchWrap = styled.div`
  margin-top: 150px;
`;

const Input = styled.input`
  all: unset;
  /* 반드시 all unset은 제일 첫번째에 있어야함 밑에적으면 위에 적은 스타일도 다 날아감 */
  width: 100%;
  border: 1px solid #555;
  padding: 20px;
  box-sizing: border-box;
  /* all unset했기때문에 box-sizing 넣어줘야함 */
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
  }
`;
const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  margin-top: 150px;
`;
const Con = styled.div``;
const MovieImg = styled.div`
  height: 300px;
`;
const Movietitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
`;

export const Search = () => {
  const [scdata, setScData] = useState();
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const searchMovie = async () => {
    const { search: term } = getValues();
    // =>getValues는 인풋태그에 작성된 내용을 가져옴
    setLoading(true);
    try {
      const {
        data: { results },
      } = await movieApi.search(term);

      if (results.length <= 0) {
        setError("result", {
          message: "영화가 없어요!",
        });
        // => setError("에러이름", {message : "값"})
        // => useForm에 있는 속성으로 에러를 설정할수 있음
      } else {
        setScData(results);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(errors);
  // =>폼상태에 에러처리 담당

  return (
    <>
      <PageTitle title={"Search"} />
      <Container>
        <SearchWrap>
          <form onSubmit={handleSubmit(searchMovie)}>
            <Input
              {...register("search", {
                required: "내용은 필수 입니다.",
                onChange() {
                  clearErrors("result");
                },
              })}
              type="text"
              placeholder="영화 검색..."
            />

            {errors?.search?.message}
            {errors?.result?.message}
          </form>
        </SearchWrap>

        {loading ? (
          <Loading />
        ) : (
          <>
            {scdata && (
              <ConWrap>
                {scdata.map((sc) => (
                  <Link to={`/detail/${sc.id}`}>
                    <Con key={sc.id}>
                      <MovieImg
                        style={{
                          background: `url(${
                            sc.backdrop_path
                              ? `${imgUrl}${sc.backdrop_path}`
                              : `data:image/png;base64,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`
                          }) no-repeat center/cover`,
                        }}
                      ></MovieImg>
                      <Movietitle>{sc.title}</Movietitle>
                    </Con>
                  </Link>
                ))}
              </ConWrap>
            )}
          </>
        )}
      </Container>
    </>
  );
};
