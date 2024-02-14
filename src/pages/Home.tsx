import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'
import PaymentForm from '../components/PaymentForm'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Hero />
      <PaymentForm />
    </>
  )
}

export default Home
