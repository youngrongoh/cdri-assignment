import { Book } from '@/types/book';
import { useLocalStorage } from 'react-use';

const CART_KEY = 'book-cart';
export default function useCartStore() {
  const [cart = [], storeCart] = useLocalStorage<Book[]>(CART_KEY, []);

  const put = (book: Book) => {
    storeCart([...cart, book]);
  };

  const remove = (index: number) => {
    if (index < 0) return;
    storeCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
  };

  const toggle = (book: Book) => {
    const index = cart.findIndex((item) => item.isbn === book.isbn);
    const includesCart = index > -1;

    if (includesCart) {
      remove(index);
    } else {
      put(book);
    }
  };

  return { cart, toggle } as const;
}
