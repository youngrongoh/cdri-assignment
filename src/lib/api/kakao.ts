import ky from 'ky';

export interface BookResponse {
  documents: {
    authors: string[];
    contents: string;
    datetime: string;
    isbn: string;
    price: number;
    publisher: string;
    sale_price: number;
    status: string;
    thumbnail: string;
    title: string;
    translators: string[];
    url: string;
  }[];
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
}

export async function fetchBooks(
  query: { query: string; target?: string },
  page: number,
  size = 10,
): Promise<BookResponse> {
  const params = new URLSearchParams({
    ...query,
    page: page.toString(),
    size: size.toString(),
  });

  return ky
    .get(`https://dapi.kakao.com/v3/search/book?${params.toString()}`, {
      headers: {
        Authorization: `KakaoAK ${process.env.VITE_API_KEY}`,
      },
    })
    .json();
}
