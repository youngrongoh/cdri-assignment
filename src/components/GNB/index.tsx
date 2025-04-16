import { Tabs, TabsList, TabsTrigger } from '@/components/Tabs';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router';

export default function GNB() {
  const location = useLocation();
  const current = useMemo(
    () => location.pathname.slice(1) ?? 'search',
    [location.pathname],
  );

  return (
    <div className="flex space-between xl:pl-40 xl:pr-92 md:px-20 gap-8 typo-title1">
      <div className="shrink-0">
        <Link to="/">CERTICOS BOOKS</Link>
      </div>
      <nav className="basis-full w-full">
        <Tabs
          className="w-full items-center"
          variant="underline"
          value={current}
        >
          <TabsList className="justify-between w-full max-w-59">
            <TabsTrigger className="grow-0 block" value="search" asChild>
              <Link to="/search">도서 검색</Link>
            </TabsTrigger>
            <TabsTrigger className="grow-0 block" value="cart" asChild>
              <Link to="/cart">내가 찜한 책</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>
    </div>
  );
}
