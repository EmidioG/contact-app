import React, { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
import ContactFormComponent from './components/ContactFormComponent';
import ContactsTableComponent from './components/ContactsTableComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [dados, setDados] = useState([]);

  return (
    <div className="App">
      <HeaderComponent />
      <ContactFormComponent setDados={setDados} />
      <ContactsTableComponent dados={dados} />
    </div>
  );
}

export default App;
