import logo from './logo.svg';
import './App.css';
import {useEffect, useMemo, useState} from 'react';


function App() {
  const [name , setname] = useState();
  const [item , setitem] = useState([])

    const adddata = () =>
  {
    setitem([...item , name])
    localStorage.setItem('name'  , JSON.stringify(item))
  }
  // useEffect(() =>{
  // },[item])



  function show()
  {
   const get = localStorage.getItem('name',name)
   alert(get)
  }
  function remove()
  {
    const remove = localStorage.removeItem('name' , name )
    alert('data is delete...')
  }

  return (
    <div className="App">

     name:  <input type="text" placeholder='name' onChange={(e) => setname(e.target.value)} />

     <input type="button" value="add data"  onClick={() => adddata()}/>
     <input type="button" value="show data"  onClick={() => show()}/>
     <input type="button" value="remove data"  onClick={() => remove()}/>


    </div>
  );
}

export default App;
