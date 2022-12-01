import { FC } from 'react';
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';
import './app.css';
const App: FC = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
}

export default App;
