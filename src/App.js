import {useEffect,useState} from 'react'
import axios from 'axios'
import './App.css';
import Coin from './components/Coin';
import './query.css'

function App() {

  const [coins,setCoins] = useState([])
  const [error,setError] = useState('')
  const [search,setSearch] = useState('')
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en')
    .then(res => {
      console.log(res.data)
      setCoins(res.data)
      setLoading(false)
    })
    .catch(err => {
      console.log("Error")
      setError("Something went Wrong")
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
    {
      loading?<h3 className='error-box'>Loading...</h3>:
      <div className='box'>
    {
      
     filterCoin.map(coin => (
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
      ))
    }
    </div>
    }
    {error&&<h3 className='error-box'>{error} 😕</h3>}
   
   
    </div>
  );
}

export default App;
