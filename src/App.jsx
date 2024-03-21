import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { useEffect, useState } from "react"
import { PORTFOLIO_DETAILS_API } from "./constants"
import { useDispatch } from "react-redux"
import { updatePortfolioDetails } from "./store/slices/portfolioDetailsSlice"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPortfolioDetails();
    setLoading(false);
  }, []);

  const fetchPortfolioDetails = async () => {
    const response = await fetch(PORTFOLIO_DETAILS_API);
    const jsonData  = await response.json();
    dispatch(updatePortfolioDetails(jsonData));
  };

  return !loading ? (
    <>
        <Header />
        <Outlet />
        <Footer />
    </> 
  ) : <h1>Loading....</h1>;
}

export default App;