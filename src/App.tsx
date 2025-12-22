import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@/pages/Layout/Layout';
import HomePage from '@/pages/HomePage/HomePage';
import AllRecipesPage from '@/pages/AllRecipesPage/AllRecipesPage';
import RecipeDetailPage from '@/pages/RecipeDetailPage/RecipeDetailPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

import './styles/fonts.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="recipes" element={<AllRecipesPage />} />
          <Route path="recipes/:id" element={<RecipeDetailPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
