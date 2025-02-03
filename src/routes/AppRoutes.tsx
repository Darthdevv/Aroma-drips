import RootLayout from '@/pages/RootLayout'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<RootLayout />} />
    </>
  )
);


export default AppRoutes