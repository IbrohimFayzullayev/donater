import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center text-gray-700 font-sans text-lg">
        <Link
          to="/user"
          className="bg-blue-500 text-white font-bold  py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline transition duration-300"
        >
          user
        </Link>
      </div>
    </>
  )
}

export default Home
