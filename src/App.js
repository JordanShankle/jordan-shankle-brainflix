// Sass
import './App.scss';

// React Modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import UploadPage from './pages/UploadPage/UploadPage';

// Components
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';



// App Component Function
const App = () => {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videos/:videoId' element={<HomePage />} />
        <Route path='/upload' element={<UploadPage />} />
      </Routes>

    </Router>
  );
}

export default App;