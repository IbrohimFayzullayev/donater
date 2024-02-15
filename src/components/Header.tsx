import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='sticky left-0 top-0 py-3 w-full  bg-gray-900 z-50'>
      <div className='flex items-center justify-between text-lg text-gray-700 font-sans w-3/5 my-0 mx-auto'>
        <Link to='/'>
          <img
            className='h-12'
            src='https://maimoon.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c28560d0.png&w=256&q=75'
            alt='logo'
          />
        </Link>
        <div className='flex items-center justify-center'>
          <ol
            className='flex items-center justify-center space-x-4
            list-none text-white font-bold'
          >
            <li className='ml-4'>
              <Link
                to='/'
                className='focus:shadow-outline rounded px-4 py-2 font-bold
                text-white transition duration-300 hover:bg-gray-700 focus:outline-none'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/user'
                className='focus:shadow-outline rounded  px-4 py-2 font-bold
                text-white transition duration-300 hover:bg-gray-700 focus:outline-none'
              >
                User
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Header
