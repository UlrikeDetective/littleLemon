import './Main.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';

function BookingPage() {
  return <h1>Booking Page</h1>;
}

function Main() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </main>
  );
}

export default Main;