import { Main } from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/SignIn/SignIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
