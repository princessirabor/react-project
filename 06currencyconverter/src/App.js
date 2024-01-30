
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components/index";

function App() {
  const[amount,setAmount]= useState(0);
  const[from,setFrom]=useState('cad');
  const[to,setTo]=useState('usd');
  const[convertedAmount,setConvertedAmount]=useState(0);

  const currencyInfo= useCurrencyInfo(from)

  const options= Object.keys(currencyInfo)
  const convert=()=>{
    setConvertedAmount(amount * currencyInfo[to])

  }
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (
    
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{backgroundImage: 'url(https://images.unsplash.com/photo-1443041630902-3ad09447e1a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGN1cnJlbmN5JTIwY29udmVyc2lvbnxlbnwwfHwwfHx8MA%3D%3D)'}}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30"
        >
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()

          }
          }>
            <div className="w-full mb-1" >
              <InputBox 
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setFrom(currency)}
              onAmountChange={(amount)=>setAmount(amount)}
              selectedCurrency={from}
              />

            </div>
            <div className="relative w-full h-0.5"    
            >
              <button
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
              >
                Swap

              </button>

            </div>
            <div className="w-full mb-1">
            <InputBox 
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setTo(currency)}
              amountDisabled
              selectedCurrency={to}
              />
            

            </div>
            <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}

            </button>

        

          </form>

        </div>

      </div>
      
    
    </div>
    
  );
}

export default App;
