import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header, Loader } from '@shared/components';

export const Layout = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};
