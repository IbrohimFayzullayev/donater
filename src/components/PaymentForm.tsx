import { useState } from "react"
import User from "../img/User.svg"
import Wallet from "../img/Wallet.svg"
import HumoCard from "../img/humo-card.png"
import UzCard from "../img/uzcard.png"
import PaymeImg from "../img/payme.png"
import ClickImg from "../img/click.png"
import { thousandSeperate } from "../utils/funcs"
import { IMaskInput } from "react-imask"

const prices =[10000,20000,50000,100000]

const PaymentForm = () => {
    const [price, setPrice] = useState("5000")

    return (
        <div className="border-t-[1px] border-gray-300 pb-20">
            <div className="w-3/6 my-0 mx-auto mt-10">
                <h1 className="text-lg font-bold">Ведите ваше имя и сумму доната</h1>
                    <form className="mt-5">
                        <div className="w-full border-2 mb-3 border-gray-300 rounded-lg p-3 relative bg-white focus-within:border-gray-600">
                          <img src={User} alt="user" className="w-6 h-6 absolute left-2 top-3" />
                          <input type="text" id="cardnumber" className="border-none bg-transparent outline-none w-full ml-7" placeholder="Ваше имя" />
                          <label className="absolute right-3 top-3 inline-flex items-center cursor-pointer">
                             <input type="checkbox" value="" className="sr-only peer" />
                             <div className="w-11 h-6 bg-gray-100 peer-focus:outline-none  rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>
                       </div>
                        <div className="w-full border-2 border-gray-300 rounded-lg p-3 relative bg-white focus-within:border-gray-600">
                          <img src={Wallet} alt="wallet" className="w-6 h-6 absolute left-2 top-3" />
                        <IMaskInput
                            mask={Number}
                            className="border-none bg-transparent outline-none w-full ml-7"
                            thousandsSeparator=" "
                            onAccept={(value) => setPrice(value)}
                            placeholder="Сумма"
                            value={price}
                        />
                        <label className="absolute right-3 top-3 inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-100 peer-focus:outline-none  rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <p className="text-gray-400 mb-3 text-sm">Minimum 5 000 UZS</p>
                    <div className="flex gap-3 items-center mb-4">
                        {prices.map((p, i) => (
                            <button type="button" className={`${Number(price.split(" ").join(""))===p ? 'bg-yellow-500':'bg-gray-300'}  text-gray-600 px-5 py-2 rounded-full`} onClick={()=>setPrice(String(p))}><b>{thousandSeperate(p)}</b> UZS</button>
                        ))}
                    </div>
                    <textarea name="" id="" className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4"
                        rows={3} 
                        placeholder="Комментарий к донату"
                    ></textarea>
                    <div className="flex items-center gap-3">
                        <div className="rounded-md bg-white border-[1px] flex items-center relative justify-around gap-1 cursor-pointer h-16 w-36">
                            <img src={HumoCard} alt="humo card" className="inset-0 h-3/5 w-3/6" />
                            <img src={UzCard} alt="uzcard" className="inset h-3/5 w-3/6" />
                            <div className="absolute inset-0 bg-gray-800 opacity-60 rounded"></div>
                        </div>
                        <div className="relative rounded-md z-0 border-[1px] cursor-pointer h-16 w-36 ">
                            <img src={PaymeImg} alt="payme" className="inset-0 w-full h-full object-cover rounded" />
                            <div className="absolute inset-0 bg-gray-800 opacity-60 rounded"></div>
                        </div>
                        <div className="relative rounded-md border-[1px] cursor-pointer h-16 w-36">
                            <img src={ClickImg} alt="click" className="inset-0 w-full h-full object-cover rounded" />
                            <div className="absolute inset-0 bg-gray-800 opacity-60 rounded"></div>
                        </div>
                    </div>
                </form>
        </div>
        </div>
  )
}

export default PaymentForm