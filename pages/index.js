import { useState } from 'react'

export default function Home() {

  const [bill, setBill] = useState(0.00)
  const [tip, setTip] = useState(0.00)
  const [tipPercent, setTipPercent] = useState(18.00)
  const [total, setTotal] = useState(0.00)
  const calcTip = (e) => {
    e.preventDefault();
    let p = parseFloat(tipPercent) / 100;
    setTip(parseFloat(bill * p));
    setTotal(parseFloat(bill * p) + parseFloat(bill));
  }

  return (
    <div className='w-full h-screen bg-slate-200 flex flex-col pt-1 items-center '>
      <h1 className='text-5xl flex justify-center mb-5 mt-3 font-bold tracking-wider'>Tip Calculator</h1>
      <div className='w-5/6 h-24 my-3 mx-3 mt-3 p-2 bg-slate-400 flex justify-center items-center shadow-xl ring-2 ring-slate-700 ring-offset-4 ring-offset-slate-500'>

        <h1 className='text-7xl font-bold tracking-wider'>
          ${tip.toFixed(2)}
        </h1>

      </div>

      <div className='flex flex-col font-bold p-2'>
        <div className='space-x-3 flex'>
          <span className=' w-full'>Cost of Meal </span>
          <input type="number" name="bill" id="bill" onChange={(e) => setBill(e.target.value)} className='mb-3 text-center' placeholder='$0.00' />
        </div>

        <div className='space-x-3 flex' >
          <span className='w-full '>Tip Percent </span>
          <input type="number" className='text-center' name='tipPercent' id='tipPercent' onChange={(e) => setTipPercent(e.target.value)} placeholder='18%' />
        </div>
      </div>

      <h1 className='text-5xl flex justify-center mb-3 mt-3 font-bold tracking-wider'>Total</h1>
      <div className='w-5/6 h-24 my-3 mx-3 mt-5 p-2 bg-slate-400 flex justify-center items-center shadow-xl ring-2 ring-slate-700 ring-offset-4 ring-offset-slate-500 text-5xl sm:text-7xl font-bold tracking-wider'>
        ${total.toFixed(2)}
      </div>
      <button onClick={calcTip} className='bg-slate-400 p-3 ring-2 ring-slate-700 ring-offset-2 ring-offset-slate-500 p-2 rounded-full mt-16 text-3xl font-bold hover:bg-slate-500'>Calculate</button>
    </div >

  )
}
