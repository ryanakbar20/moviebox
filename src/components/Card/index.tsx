import moment from "moment";

interface CardProps {
  title: string;
  date: string;
  onClick(): any;
}

export default function Card(Props: CardProps) {
  return (
    <div
      className="rounded-lg relative cursor-pointer hover:-translate-y-1 transition duration-500"
      onClick={Props.onClick}
    >
      <img
        className="rounded-lg"
        src={`https://raw.githubusercontent.com/ryanakbar20/images-movie/main/${Props?.title}.png`}
        alt="poster-movie"
      />
      <div className="group">
        <div className="absolute top-0 right-0 bottom-0 left-0 group-hover:bg-gradient-to-t group-hover:from-gray-800 group-hover:to-transparent opacity-50 transition duration-500 ease-in-out" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-center text-transparent group-hover:text-white font-semibold text-base transition duration-500 ease-in-out">
            {Props?.title}
          </p>
          <p className="text-center text-transparent group-hover:text-white font-semibold text-sm transition duration-500 ease-in-out">
            {moment(Props?.date, moment.ISO_8601).format("YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
}
