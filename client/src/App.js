import logo from './logo.svg';
import AddProduct from './components/AddProduct/AddProduct';
import ProductList from './components/ProductList/ProductList';
import DemoApp from './components/DemoAPI/DemoApi';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import NoPage from './components/NoPage/NoPage';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  Link
} from "react-router-dom";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="DemoApp" element={<DemoApp />} />
          <Route path="ProductList" element={<ProductList />} />
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
