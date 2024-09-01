import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`books.json`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [setBooks]);

  return (
    <div>
      <h1 className="text-primary font-bold text-[40px] text-center mb-10">
        Books: {books.length}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {books.map((book) => (
          <Book book={book} key={book.id}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
