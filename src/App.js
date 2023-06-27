import HeaderComponent from "./components/HeaderComponent.js";
import ContactFormComponent from "./components/ContactFormComponent";
import ContactsTableComponent from "./components/ContactsTableComponent.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ContactFormComponent />
      <ContactsTableComponent />
    </div>
  );
}

export default App;
