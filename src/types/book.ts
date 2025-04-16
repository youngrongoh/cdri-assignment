export interface Book {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  salePrice: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

export interface BookMeta {
  isEnd: boolean;
  pageableCount: number;
  totalCount: number;
}

export interface BookData {
  documents: Book[];
  meta: BookMeta;
}
