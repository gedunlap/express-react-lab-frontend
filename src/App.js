import './App.css';

// Import Components
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Switch} from "react-router-dom"

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
  // URL should have HEROKU URL from backend , make sure to include the traling slash
  const URL = "https://express-react-lab-jedi.herokuapp.com/"

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects URL={URL} />
        </Route>
        <Route path='/about'>
          <About URL={URL} />
        </Route>
        <Route path='/contact'>
          <Contact URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
