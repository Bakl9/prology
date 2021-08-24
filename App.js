import './App.css';
import { Content } from './component/Content'
import { Header } from './component/Header'
import { Nav } from './component/Nav'

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Content/>
      <Nav/>
    </div>
  );
}

export default App;
