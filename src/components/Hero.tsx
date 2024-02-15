// import Banner from '../img/banner.jpeg'
import Avatar from '../img/avatar.jpeg'
import YouTubeIcon from '../img/youtube.svg'
import TelegramIcon from '../img/Telegram.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='mb-10 mt-14 '>
      <div className='w-3/6 rounded-lg bg-gray-100 p-6 my-0 mx-auto flex items-start bg-opacity-60 backdrop-blur-sm flex-row-reverse justify-between'>
        <div className='h-56 w-56 rounded-[30px]'>
          <img className='h-56 w-56 object-cover rounded-[25px]' src={Avatar} alt='avatar' />
        </div>
        <div className='flex flex-col gap-2 pt-4'>
          <h1 className='text-3xl font-bold uppercase'>Yakudza</h1>
          <h3 className='text-xl font-normal uppercase text-gray-900'>@Yakudza</h3>
          <p className='text-gray-900'>Stremer</p>
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
