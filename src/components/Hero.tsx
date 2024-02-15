import Banner from '../img/banner.jpeg'
import Avatar from '../img/avatar.jpeg'
import YouTubeIcon from '../img/youtube.svg'
import TelegramIcon from '../img/Telegram.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='mb-64'>
      <div>
        <img src={Banner} alt='hero' className='w-full h-72 object-cover' />
      </div>
      <div className='w-3/5 my-0 mx-auto relative'>
        <div className='h-56 w-56 border-4 border-gray-100 rounded-[30px] absolute -top-20 right-0'>
          <img className='h-56 w-56 object-cover rounded-[25px]' src={Avatar} alt='avatar' />
        </div>
        <div className='absolute left-0 flex flex-col gap-2 pt-4'>
          <h1 className='text-3xl font-bold uppercase'>Yakudza</h1>
          <h3 className='text-xl font-normal uppercase text-gray-700'>@Yakudza</h3>
          <p className='text-gray-500'>Frontend Developer</p>
          <div className='flex items-center gap-3'>
            <Link to='https://www.youtube.com/@FOREVERyakudza' target='_blank'>
              <img src={YouTubeIcon} alt='youtube' className='w-6 h-6' />
            </Link>
            <Link to='https://www.youtube.com/@FOREVERyakudza' target='_blank'>
              <img src={TelegramIcon} alt='youtube' className='w-6 h-6' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
