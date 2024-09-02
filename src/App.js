import Sidebar from './sidebar';
import Top from './top-bar';
import './App.css';
import Body from './body';

function App() {
  return (
    <div className="App">
      <Top />
      <div className='flex'>
     <Sidebar />
     <Body />
     </div>
    </div>
  );
}

export default App;
