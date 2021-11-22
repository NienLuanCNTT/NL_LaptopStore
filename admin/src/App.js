import SideBar from 'components/SideBar/SideBar';
import TopBar from 'components/TopBar/TopBar';
import Home from 'pages/Home/Home';
import './sass/index.scss';


function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>

    </div>
  );
}

export default App;