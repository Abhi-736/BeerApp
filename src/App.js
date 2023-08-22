import React from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import axios from "axios";
import Loading from './components/Loading';


const App = () => {

    const [BeerArray, setBeerArray]= React.useState('')
    const [search,setSearch] = React.useState('')
    const [loading, setLoading]= React.useState(true)
    React.useEffect(() => {
      const fetch = async () => {
        try {/* setLoading(true) */
          const response = await axios.get(`https://api.punkapi.com/v2/beers${search &&`?beer_name=${search}`}`);
          setBeerArray(response.data);
          console.log(response.data)
          setLoading(false)
        } catch (error) { /* setLoading(true) */
          console.log(error);
          setLoading(false)
        }
      };
  
      fetch();
    },[search]);
  
    
    const handleSearch=(value)=>{

setSearch(value)
  
    }
  return (<>{loading?<Loading/>:
    <div><Header handleSearch={handleSearch}/>
    <Main BeerArray={BeerArray}/></div>}
    </>
  )
}

export default App