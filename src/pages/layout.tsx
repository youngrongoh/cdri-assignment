import { Outlet } from 'react-router';
import GNB from '@/components/GNB';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/lib/query-client';

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <header>
          <GNB />
        </header>
        <main className="mx-auto py-8">
          <Outlet />
        </main>
      </div>
    </QueryClientProvider>
  );
}
