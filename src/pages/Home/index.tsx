import { Card, Footer, Header, Spinner } from "../../components";
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../../graphql/movie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface MoviesTypes {
  title: string;
  releaseDate: string;
  id: string;
}

export default function Home() {
  const navigate = useNavigate();
  const { data, loading } = useQuery(GET_MOVIES);
  const [search, setSearch] = useState("");

  function handleSearch(e: any) {
    setSearch(e.target.value);
  }

  function datasets(movies: any) {
    return movies?.filter((film: any) =>
      film?.title?.toLowerCase()?.includes(search?.toLowerCase())
    );
  }

  return (
    <>
      <div className="container mx-auto px-2 min-h-screen">
        <Header onSearch={handleSearch} />
        <section>
          <div className="banner-section py-24 px-4 rounded-xl">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-right">
              Star Wars Special
            </h1>
          </div>
        </section>
        <section className="mt-4">
          <h2 className="font-semibold text-white text-xl mb-4">
            Most Popular
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {datasets(data?.allFilms?.films)?.map(
              (item: MoviesTypes, index: number) => {
                return (
                  <Card
                    title={item?.title}
                    date={item?.releaseDate}
                    key={index}
                    onClick={() => navigate(`/detail/${item?.id}`)}
                  />
                );
              }
            )}
          </div>
          {loading && <Spinner />}
          {datasets(data?.allFilms?.films)?.length < 1 && (
            <p className="text-white font-medium text-gray-400 text-center mt-14">
              Not Found
            </p>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}
