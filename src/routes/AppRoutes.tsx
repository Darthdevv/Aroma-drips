import BreezersProducts from '@/components/BreezersProducts';
import CoffeProducts from '@/components/CoffeProducts';
import FrappeProducts from '@/components/FrappeProducts';
import IcedCoffeProducts from '@/components/IcedCoffeProducts';
import MilkShakeProducts from '@/components/MilkShakeProducts';
import MojitoProducts from '@/components/MojitoProducts';
import SmoothiesProducts from '@/components/SmoothiesProducts';
import Cart from '@/pages/Cart';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import OrderHistory from '@/pages/OrderHistory';
import ProductDetails from '@/pages/ProductDetails';
import RootLayout from '@/pages/RootLayout'
import SearchPage from '@/pages/SearchPage';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/hotcoffe" element={<CoffeProducts />} />
        <Route path="/icedcoffe" element={<IcedCoffeProducts />} />
        <Route path="/milkshakes" element={<MilkShakeProducts />} />
        <Route path="/frappe" element={<FrappeProducts />} />
        <Route path="/mojito" element={<MojitoProducts />} />
        <Route path="/breezers" element={<BreezersProducts />} />
        <Route path="/smoothies" element={<SmoothiesProducts />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </>
  )
);


export default AppRoutes