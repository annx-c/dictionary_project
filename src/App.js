
import './App.css';
import Dictionary from './Dictionary';
export default function App() {
  return (
    

    <div className="App">
      <div className='container'>
      <header className="App-header">
       <h1 className='text-center'>Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword = "sunrise"/>
      </main>
      
      <footer className='text-center'>
        Code by Ana Cañete
      </footer>
      </div>
    </div>
  );
}


