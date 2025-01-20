import CategoriesPage from '@/pages/Categories'
import ProductsPage from '@/pages/Products';
import RootLayout from '@/pages/RootLayout'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<RootLayout />} />
      <Route path={"/categories"} element={<CategoriesPage />} />
      <Route path={"/products"} element={<ProductsPage />} />
    </>
  )
);


export default AppRoutes