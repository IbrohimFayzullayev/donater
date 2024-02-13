import Banner from "../img/banner.jpeg"

const Hero = () => {
  return (
      <div>
          <img src={Banner} alt="hero"
            className="w-full h-96 object-cover"
          />   
    </div>
  )
}

export default Hero