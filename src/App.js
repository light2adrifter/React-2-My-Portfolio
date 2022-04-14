import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio'

function App() {
  const [categories] = useState([
    { name: 'portfolio', description: "What I've done" },
    { name: 'contact', description: "Reach out to me" },
    { name: 'resume', description: "What I'm made of" },
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
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
        <Portfolio currentCategory={currentCategory}></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
