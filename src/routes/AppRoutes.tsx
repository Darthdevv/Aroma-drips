import BreezersProducts from '@/components/BreezersProducts';
import CoffeProducts from '@/components/CoffeProducts';
import FrappeProducts from '@/components/FrappeProducts';
import IcedCoffeProducts from '@/components/IcedCoffeProducts';
import MilkShakeProducts from '@/components/MilkShakeProducts';
import MojitoProducts from '@/components/MojitoProducts';
import ProtectedRoute from '@/components/ProtectedRoute';
import SmoothiesProducts from '@/components/SmoothiesProducts';
import Cart from '@/pages/Cart';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import OrderHistory from '@/pages/OrderHistory';
import ProductDetails from '@/pages/ProductDetails';
import { Profile } from '@/pages/Profile';
import RootLayout from '@/pages/RootLayout'
import SearchPage from '@/pages/SearchPage';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom'

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />


      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orderHistory" element={<OrderHistory />} />
          <Route path="product-details" element={<ProductDetails />} />
          <Route path="hotcoffe" element={<CoffeProducts />} />
          <Route path="icedcoffe" element={<IcedCoffeProducts />} />
          <Route path="milkshakes" element={<MilkShakeProducts />} />
          <Route path="frappe" element={<FrappeProducts />} />
          <Route path="mojito" element={<MojitoProducts />} />
          <Route path="breezers" element={<BreezersProducts />} />
          <Route path="smoothies" element={<SmoothiesProducts />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>


      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Route>
  )
);

export default AppRoutes;