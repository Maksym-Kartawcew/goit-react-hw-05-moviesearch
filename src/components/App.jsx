import React from 'react';
import { Suspense, lazy } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import styles from './App.module.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <div>
      <header className={styles.homeWrap}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/SearchPage">Search movies</NavLink>
      </header>
      <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
        </Suspense>
      </main>
    </div>
  );
};
