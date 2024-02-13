import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Hero />
    </>
  )
}

export default Home
