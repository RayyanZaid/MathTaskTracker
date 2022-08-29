import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TaskHome from './pages/TaskHome';
import WelcomePage from './pages/Welcome';
import SignUpPage from './pages/SignUp';
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
            element={<TaskHome/>}
          />

          <Route
            path = "/signup"
            element = {<SignUpPage/>}
          />
        </Routes>
      </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
