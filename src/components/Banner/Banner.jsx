import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{ backgroundColor: `rgba(19, 19, 19, 0.05)` }}
      className="rounded-3xl py-[80px] px-[120px] flex justify-between"
    >
      <div>
        <h1 className="text-[56px] font-bold text-primary mb-12">
          Books to freshen <br /> up your bookshelf
        </h1>
        <Link
          to="/books"
          className="bg-[#23BE0A] px-7 py-[21px] rounded-lg text-xl text-[#FFFFFF] font-bold"
        >
          View The List
        </Link>
      </div>
      <img src="https://i.ibb.co/Qmy1m1F/banner.png" alt="Movie" />
    </div>
  );
};

export default Banner;
