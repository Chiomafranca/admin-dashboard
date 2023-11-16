import './App.css';
import LeftColum from './componets/LeftColum';
import Navbar from './componets/Navbar';
import RightColum from './componets/RightColum';
import Sidebar from './componets/Sidebar';

function App() {
  return (
    <div className='flex'>
       <Sidebar/>
       <div className='flex flex-col flex-1 relative'>
        <Navbar/>

           <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
          <div className='col-span-2'>
             <LeftColum/>
            </div>
          <div className='w-full'>
             <RightColum/>
            </div>
       </div>
       </div>

    </div>
  );
}

export default App;
