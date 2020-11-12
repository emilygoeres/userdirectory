// Links everything together to ensure all pages have the same header, footer, main
import logo from './logo.svg';
import './App.css';
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Main from "./pages/Main"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
    
  );
}

export default App;
