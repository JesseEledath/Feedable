import './Home.css'
import Products from '../../components/Products/Products'
// import Search from '../../components/Search/Search'
import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="products-screen">
          <div className="sort-box">
            shit
          </div>
          <div className="products-box">
            <Products />
          </div>
        </div>
      </Layout>
    </div>
  )
}


export default Home;