import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'
import PaymentForm from '../components/PaymentForm'
import Banner from '../img/banner.jpeg'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <div
        className='bg-no-repeat bg-center h-full w-full fixed z-[-1] top-0 left-0 bg-cover backdrop-blur-xl'
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <Hero />
      <PaymentForm />
    </>
  )
}

export default Home
