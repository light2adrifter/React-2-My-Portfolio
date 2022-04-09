import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio'

function App() {
  const [categories] = useState([
    { name: 'Portfolio', description: "What I've done" },
    { name: 'Contact', description: "Reach out to me" },
    { name: 'Resume', description: "What I'm made of" }
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      </Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
