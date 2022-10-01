import ImagenB64 from './components/ImagenB64'
import './App.css';
import { useState } from 'react';

function App() {
    const [imagen, setImagen] = useState("");
    return (
            <div className='App'>
             <input name="imagen" type="file" multiple onChange = {(e)=>ImagenB64(e.target.files,setImagen)}/><br/><br/>
             <img src={`data:image/jpeg;base64,${imagen}`}/>
              <a href="https://base64.guru/converter/decode/file" class="active">Comprueba aqui</a>
           </div>
  );
}


export default App;

