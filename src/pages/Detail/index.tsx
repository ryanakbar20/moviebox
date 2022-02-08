import { useQuery } from "@apollo/client";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Footer, Header, Spinner } from "../../components";
import { GET_MOVIES, GET_DETAIL_MOVIE } from "../../graphql/movie";

interface MoviesTypes {
  title: string;
  releaseDate: string;
  id: string;
}

export default function Detail() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, loading } = useQuery(GET_MOVIES);
  const { data: dataDetail, loading: loadingDetail } = useQuery(
    GET_DETAIL_MOVIE,
    {
      variables: { id: params?.id },
    }
  );

  return (
    <>
      <div className="container mx-auto px-2 min-h-screen">
        <Header />
        <section>
          <div className="banner-section-detail py-28 px-4 rounded-xl"></div>
        </section>
        {dataDetail?.film ? (
          <section className="-mt-24 ml-4">
            {loadingDetail ? (
              <Spinner />
            ) : (
              <div className="flex flex-row space-x-4">
                <img
                  className="rounded-lg h-60"
                  src={`https://raw.githubusercontent.com/ryanakbar20/images-movie/main/${dataDetail?.film?.title}.png`}
                  alt="poster-movie"
                />
                <div>
                  <h2 className="font-bold text-white text-xl md:text-2xl">
                    {dataDetail?.film?.title}
                  </h2>
                  <div className="lg:w-8/12 mt-4">
                    <ul>
                      <li>
                        <p className="text-gray-200 font-normal">
                          Release :{" "}
                          {moment(
                            dataDetail?.film?.releaseDate,
                            moment.ISO_8601
                          ).format("YYYY")}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-200 font-normal">
                          Director : {dataDetail?.film?.director}
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-200 font-normal">
                          Description : {dataDetail?.film?.openingCrawl}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </section>
        ) : (
          <p className="font-bold text-white text-xl md:text-2xl text-center">
            Not Found
          </p>
        )}

        <section className="mt-4">
          <h2 className="font-semibold text-white text-xl mb-4">
            Recomendation
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {data?.allFilms?.films?.map((item: MoviesTypes, index: number) => {
              return (
                item?.id !== params?.id && (
                  <Card
                    title={item?.title}
                    date={item?.releaseDate}
                    key={index}
                    onClick={() => navigate(`/detail/${item?.id}`)}
                  />
                )
              );
            })}
          </div>
          {loading && <Spinner />}
        </section>
      </div>
      <Footer />
    </>
  );
}
