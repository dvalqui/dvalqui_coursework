import './App.css';
import React, {useState} from 'react';

function App() {
  const [items, setItems] = useState(
  [ "Go Shopping", "Clean bathroom", "Do the Laundry"
    //{name: "Go shopping"},
    //{name: "Clean bathroom"}, 
    //{name: "Car's MOT"}
  ]
  )
  
  const itemNodes = items.map((item, index) => {
    return(
      <li key={index}> <span>{item}</span></li>
    )

  })

  return (
    <div className = "App">
        <h1>To Do List</h1>
        <hr></hr>

        <ul>
          {itemNodes}
        </ul>
        
    </div>
  );
}

export default App;
