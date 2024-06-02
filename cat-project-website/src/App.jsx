import React from 'react'
import { Navbar } from './components/Navbar'
import './styles.css'
import { WelcomeCard } from './components/WelcomeCard'
import { TheCatAPI } from "@thatapicompany/thecatapi";
import { Cats } from './components/Cats';

//live_hqkc5by3TVOKgdi9XZusoWZV6PYWuv5WuKuJ3jmrW6GxGWPVWEmMjz94vQcwBS4d
function App() {
  const[cats,setCats]=React.useState([])
  const CatsApiKey= 'live_hqkc5by3TVOKgdi9XZusoWZV6PYWuv5WuKuJ3jmrW6GxGWPVWEmMjz94vQcwBS4d'
  const theCatAPI = new TheCatAPI(CatsApiKey);
  React.useEffect(()=>{theCatAPI.images
    .searchImages({
      limit: 5,
    })
    .then((data) => {
      setCats(data)
        })
    .catch((error) => {
      console.log(error)
        });
  },[])
  return (
    <div className='app'>
      <Navbar/>
      <WelcomeCard/>
      <div>
        <h1>About us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem placeat unde commodi officia esse temporibus magnam, harum eum minus quisquam, ducimus expedita vero in. Cum, adipisci officiis! Fuga natus inventore quia reprehenderit, quod dolorem iste, adipisci consequuntur porro laudantium accusamus! Et perspiciatis veritatis architecto debitis fuga, maiores eaque ea? Mollitia fugit ullam corporis. Placeat sequi soluta tempore vitae deleniti fugit sit temporibus consequatur, veritatis commodi saepe a consectetur facilis! Rerum ra, beatae consequatur optio impedit id quod voluptate provident nesciunt cupiditate nihil dolores eligendi molestiae quidem nemo nisi.</p>
      </div>
      <Cats cats={cats}/>
    </div>
  )
}

export default App
