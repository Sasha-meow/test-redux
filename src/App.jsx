import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([])
  const getData = () => {
    axios({
      method: 'get',
      headers: { 'accept': '*/*'},
      url: 'http://794d-185-253-182-161.ngrok.io/project/view/registry/',
    }).then(function (response) {
      setItems(response.data)
      console.log(response.data);
    });
  }
  return (
    <div className="App">
      <button onClick={() => getData()}>Клик</button>
      {items.length ? items.map((item) =>
        (<div key={item.id}>{item.companyName}</div>)
      ):(<div>Упс</div>)}
    </div>
  );
}

export default App;
