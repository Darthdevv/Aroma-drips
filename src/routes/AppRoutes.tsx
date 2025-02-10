import RootLayout from '@/pages/RootLayout'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<RootLayout />} />
      <Route path="/home" />
      <Route path="/menu" />
      <Route path="/cart" />
      <Route path="/order-history" />
      <Route path="/product-details" />
      <Route path="/hot-coffee" />
      <Route path="/iced-coffee" />
      <Route path="/milkshakes" />
      <Route path="/frappe" />
      <Route path="/mojito" />
      <Route path="/breezers" />
      <Route path="/smoothies" />
    </>
  )
);


export default AppRoutes