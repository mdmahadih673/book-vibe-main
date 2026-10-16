import { IBook } from "@/app/type";
import booksData from "../../../public/booksData.json";

const books = booksData as IBook[];

export function getBooks(): IBook[] {
  return books;
}

export function getBookById(id: number): IBook | undefined {
  return books.find((book) => book.bookId === id);
}
