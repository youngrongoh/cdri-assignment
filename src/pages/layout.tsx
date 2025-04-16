import { Outlet } from 'react-router';
import GNB from '@/components/GNB';

export default function Layout() {
  return (
    <div className="min-h-screen">
      <header>
        <GNB />
      </header>
      <main className="mx-auto py-8">
        <Outlet />
      </main>
    </div>
  );
}
