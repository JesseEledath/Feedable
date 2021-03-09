import './Home.css'
import Products from '../../components/Products/Products'
// import Search from '../../components/Search/Search'
// import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  return (
    <div>
      {/* <Layout user={props.user}> */}
        {/* <Search onSubmit={handleSubmit} onChange={handleSearch} /> */}
        <div className="products">
          <Products />
        </div>
      {/* </Layout> */}
    </div>
  )
}


export default Home;