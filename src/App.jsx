import './App.css'
import Header from './Components/Header';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import {useState} from 'react';
export default function App() {
  // const [updateData, setUpdateData] = useState({});
  // console.log("index" , updateData.index);
  return (
   <div className='min-h-screen w-full bg-slate-400 '>
     <Header/>
     <TaskInput />
     <TaskList />
   </div>
  )
}
