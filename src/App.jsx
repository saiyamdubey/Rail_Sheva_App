import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar'; // Ensure this path is correct
import HomePage from './components/Home'; // Ensure this path is correct
import ComplaintForm from './components/ComplaintForm'; // Ensure this path is correct

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cum" element={<ComplaintForm />} />
      </Routes>
    </>
  );
}

export default App;
