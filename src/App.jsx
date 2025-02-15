import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/mypage' element={<p>mypage</p>} />
			<Route path='/detail/:id' element={<Detail />} />
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
		</Routes>
	);
}

export default App;
