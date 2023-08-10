


import './App.css'

import { Outlet } from 'react-router-dom';
import SidNavBar from './Components/SidNavBar/SidNavBar';

function App() {

  
  return (
		<div className='flex '>
			<div className='w-[15%] hidden md:block'>
				<SidNavBar />
			</div>

			<div className='flex-1  h-screen overflow-y-auto'>
				<Outlet />
			</div>
		</div>
  );
}

export default App
