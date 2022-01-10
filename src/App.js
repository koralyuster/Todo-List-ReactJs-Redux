import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Subject from './components/Subject';
import Tasks from './components/Tasks';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Main />

      {/* <Routes>
        <Route path="/subjects" element={<Subject />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
