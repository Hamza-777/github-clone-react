import './App.css';
import Header from './components/Header';
import SideBody from './components/SideBody';
import MainBody from './MainBody';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBody />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
