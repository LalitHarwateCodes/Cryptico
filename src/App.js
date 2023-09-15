import {useEffect,useState} from 'react'
import axios from 'axios'
import './App.css';
import Coin from './components/Coin';
import './query.css'
import CardSkeleton from './components/CardSkeleton';

function App() {

  const [coins,setCoins] = useState([])
  const [error,setError] = useState(false)
  const [search,setSearch] = useState('')
  const [loading,setLoading] = useState(true)


  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then(res => {
      console.log(res.data)
      setCoins(res.data)
      setLoading(false)
      setError(false)
    })
    .catch(err => {
      console.log("Error")
      setError(true)
      setLoading(false)
    }
    ) 
  },[])

  // const searchCoins = (e) => {
  //   setSearch(e.target.value)
  // }

  const filterCoin = coins.filter(coin => (
   coin.name.toLowerCase().includes(search.toLowerCase())
    
  )
  )
  return (
    <div className="App">
      <header className='header'>
      <img className='logo' src={require('./images/cryptico-logo-new.png')} alt={'Cryptico logo'}></img>
      </header>
      <section className='section-header'>
      <div className='container-header'>
        <p className='header-secondary'>Cryptocurrencies</p>
        <h2 className='header-primary'>Digital money for a digital world.</h2>
        <h4 className='header-tertiary'>Cryptocurrencies are digital or virtual currencies that
        use cryptography for security and are decentralized, meaning that are not controlled by any 
        government or financial institution.</h4>
        </div>
      </section>
    <div className='search'>
    <input className='search-bar' type='text' placeholder='Search cryptocurrency' value={search} onChange={e => setSearch(e.target.value)}/>
    </div>
    <div className='box'>
    {loading&&<CardSkeleton card={9}/ >}
   {filterCoin.map(coin => (
        <Coin 
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          high={coin.high_24h}
          low={coin.low_24h}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
        />
      ))}

      {/* {error?<h3 className='error-box'>Something went wrong</h3>:<h3 className='error-box'>No Coin "{search}" Found</h3>} */}
      </div>
      {error?<h3 className='error-box'>Something went wrong</h3>:
      
        (!loading&&filterCoin.length===0)&&
        <h3 className='error-box'>No Coin "{search}" Found</h3>
      
      }
      
  
    </div>
  );
}

export default App;
