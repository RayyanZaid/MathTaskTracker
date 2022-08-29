import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/TaskHome';
import WelcomePage from './pages/Welcome';
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      
      <div className="pages">
      
        <Routes>
          <Route
          path = "/"
          element = {<WelcomePage/>}
          />
          <Route 
            path = "/tasks"
            element={<Home/>}
          />
        </Routes>
      </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
