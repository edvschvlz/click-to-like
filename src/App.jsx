import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter basename='/click-to-like'>
      <Switch>
        <Route index path="/" element={<Home />} />
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
