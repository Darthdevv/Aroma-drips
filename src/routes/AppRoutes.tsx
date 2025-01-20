import CategoriesPage from '@/pages/Categories'
import ProductsPage from '@/pages/OrderDetails';
import RootLayout from '@/pages/RootLayout'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<RootLayout />} />
      <Route path={"/categories"} element={<CategoriesPage />} />
      <Route path={"/order-details/:id"} element={<ProductsPage />} />
    </>
  )
);


export default AppRoutes