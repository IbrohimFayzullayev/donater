import { useState } from 'react'
import User from '../img/User.svg'
import Wallet from '../img/Wallet.svg'
import HumoCard from '../img/humo-card.png'
import UzCard from '../img/uzcard.png'
import PaymeImg from '../img/payme.png'
import ClickImg from '../img/click.png'
import { thousandSeperate } from '../utils/funcs'
import { IMaskInput } from 'react-imask'
import Swal from 'sweetalert2'

const prices = [10000, 20000, 50000, 100000]

type PaytmentType = 'humouzcard' | 'payme' | 'click'

const PaymentForm = () => {
  const [price, setPrice] = useState('5000')
  const [loading, setLoading] = useState(false)
  const [activePaymentType, setActivePaymentType] = useState<PaytmentType>('humouzcard')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    Swal.fire({
      title: 'Waiting...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
      timer: 2000,
    }).then(() => {
      Swal.fire({
        title: 'Оплата прошла успешно',
        text: 'Спасибо за вашу поддержку!',
        icon: 'success',
        confirmButtonText: 'Ок',
        timer: 2000,
      })
    })

    setLoading(false)
  }

  return (
    <div className='my-16'>
      <div className='w-3/6 my-0 mx-auto py-10 px-6 bg-gray-100 rounded-lg bg-opacity-60 backdrop-blur-sm'>
        <h1 className='text-lg font-bold'>Ведите ваше имя и сумму доната</h1>
        <form className='mt-5' onSubmit={handleSubmit}>
          <div className='w-full border-2 mb-3 border-gray-300 rounded-lg p-3 relative bg-white focus-within:border-gray-600'>
            <img src={User} alt='user' className='w-6 h-6 absolute left-2 top-3' />
            <input
              type='text'
              id='cardnumber'
              className='border-none bg-transparent outline-none w-full ml-7'
              placeholder='Ваше имя'
            />
            <label className='absolute right-3 top-3 inline-flex items-center cursor-pointer'>
              <input type='checkbox' value='' className='sr-only peer' />
              <div className="w-11 h-6 bg-gray-100 peer-focus:outline-none  rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className='w-full border-2 border-gray-300 rounded-lg p-3 relative bg-white focus-within:border-gray-600'>
            <img src={Wallet} alt='wallet' className='w-6 h-6 absolute left-2 top-3' />
            <IMaskInput
              mask={Number}
              className='border-none bg-transparent outline-none w-full ml-7'
              thousandsSeparator=' '
              onAccept={(value) => setPrice(value)}
              placeholder='Сумма'
              value={price}
            />
            <label className='absolute right-3 top-3 inline-flex items-center cursor-pointer'>
              <input type='checkbox' value='' className='sr-only peer' />
              <div className="w-11 h-6 bg-gray-100 peer-focus:outline-none  rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <p className='text-gray-400 mb-3 text-sm'>Minimum 5 000 UZS</p>
          <div className='flex gap-3 items-center mb-4'>
            {prices.map((p, i) => (
              <button
                type='button'
                className={`${Number(price.split(' ').join('')) === p ? 'bg-yellow-500' : 'bg-gray-300'}  text-gray-600 px-5 py-2 rounded-full`}
                onClick={() => setPrice(String(p))}
              >
                <b>{thousandSeperate(p)}</b> UZS
              </button>
            ))}
          </div>
          <textarea
            name=''
            id=''
            className='w-full border-2 border-gray-300 rounded-lg p-3 mb-4'
            rows={3}
            placeholder='Комментарий к донату'
          ></textarea>
          <div className='flex items-center gap-3 justify-end'>
            <div
              onClick={() => setActivePaymentType('humouzcard')}
              className={`rounded-md bg-white border-2 flex items-center relative justify-around gap-1 cursor-pointer h-16 w-36 ${activePaymentType === 'humouzcard' ? 'border-yellow-600' : 'border-gray-300'}`}
            >
              <img src={HumoCard} alt='humo card' className='inset-0 h-3/5 w-3/6' />
              <img src={UzCard} alt='uzcard' className='inset h-3/5 w-3/6' />
              <div
                className={`absolute inset-0 bg-gray-800 transition rounded ease-in duration-300 ${activePaymentType === 'humouzcard' ? 'opacity-0' : 'opacity-60'}`}
              ></div>
            </div>
            <div
              onClick={() => setActivePaymentType('payme')}
              className={`relative rounded-md z-0 border-2 cursor-pointer h-16 w-36 ${activePaymentType === 'payme' ? 'border-yellow-600' : 'border-gray-300'}`}
            >
              <img
                src={PaymeImg}
                alt='payme'
                className='inset-0 w-full h-full object-cover rounded'
              />
              <div
                className={`absolute inset-0 bg-gray-800 transition rounded ease-in duration-300 ${activePaymentType === 'payme' ? 'opacity-0' : 'opacity-60'}`}
              ></div>
            </div>
            <div
              onClick={() => setActivePaymentType('click')}
              className={`relative rounded-md border-2 cursor-pointer h-16 w-36 ${activePaymentType === 'click' ? 'border-yellow-600' : 'border-gray-300'}`}
            >
              <img
                src={ClickImg}
                alt='click'
                className='inset-0 w-full h-full object-cover rounded'
              />
              <div
                className={`absolute inset-0 transition rounded ease-in duration-300 ${activePaymentType === 'click' ? 'opacity-0' : 'opacity-60'} bg-gray-800 rounded`}
              ></div>
            </div>
          </div>
          <div className='flex justify-end w-full'>
            <button
              type='submit'
              className='px-4 bg-yellow-600 text-white rounded-lg py-3 mt-5 disabled:opacity-50 '
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Donate'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PaymentForm
