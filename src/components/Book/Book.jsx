import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { name, image, rating, category, tags, author } = book;
  console.log(book);
  return (
    <div>
      <div
        className="p-6 rounded-2xl"
        style={{ border: `1px solid rgba(19, 19, 19, 0.15)` }}
      >
        <div
          className="bg-[#F3F3F3] flex items-center justify-center rounded-2xl"
          style={{ border: `1px solid red` }}
        >
          <img src={image} alt={`Name of book is ${name}`} />
        </div>
        <p className="text-base	text-[#23BE0A] font-medium mt-6 mb-4">
          {tags.map((tag, index) => (
            <span className="ml-3 bg-[#23BE0A0D] py-[7px] px-4 rounded-[30px]">
              {tag}
            </span>
          ))}
        </p>

        <h4 className="font-bold text-2xl text-primary my-4">{name}</h4>
        <h6 className="font-medium text-[#131313CC] mb-5">By: {author}</h6>
        <div style={{ border: `1px dashed rgba(19, 19, 19, 0.15)` }}></div>
        <div className="text-base text-[#131313CC] font-medium flex justify-between items-center mt-5">
          <p>{category}</p>
          <div className="flex justify-center items-center ">
            <p className="mr-2">{rating} </p> <FaRegStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
