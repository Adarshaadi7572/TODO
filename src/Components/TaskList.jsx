import React, { useState } from 'react';
import Pen from "../images/pen.png";
import Trash from "../images/trash.png";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { refreshSliceActive } from "../redux/refreshSlice";
import {updateSliceActive} from "../redux/updateSlice";
import Search from "../images/search.png";
//After creating a data in local storage we need to fetch that data and display it in TaskList Component.
const TaskList = () => {
  // to get current width of the screen 
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

 
    handleResize();

  
    window.addEventListener('resize', handleResize);

  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
console.log(width);



  const [data, setData] = useState([]);
  const refreshkey = useSelector((state) => state.refreshKey)
  const dispatch = useDispatch();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('task')) ?? [];
    setData(data);
  }, [refreshkey]);

  const deleteHandler = (index) => {
    console.log("index", index);
    let data = JSON.parse(localStorage.getItem("task")) ?? [];
    console.log("total Data", data);
    data.splice(index, 1);
    console.log("data remaing", data);
    localStorage.setItem('task', JSON.stringify(data));
    dispatch(refreshSliceActive());
  }
  const updateHandler = (index, item) => {
    // props.setUpdateData({ item: item, index: index });
    dispatch(updateSliceActive({ item: item, index: index }));
    // console.log("index", index);
  }
  const [completed, setCompleted] = useState({});
  
  const changeHandler = (e) => {
    const { id, checked } = e.target;
    setCompleted((prev) => {
      const updated = { ...prev, [id]: checked };
      localStorage.setItem('status', JSON.stringify(updated));
      return updated;
    });
  };
  const taskCompleted = JSON.parse(localStorage.getItem('status')) ?? {};

  console.log("taskCompleted" ,taskCompleted);
 
  const [searchData, setSearchData] = useState();
  const searchHandler = (e) => {
       e.preventDefault();
       // setData(data.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase())))
       setSearchData(e.target.value);
  }
  return (
    <div>
      <div className=' rounded bg-blue-100 mt-4 mx-4 flex items-center justify-between relative'>
         <input type="text" placeholder="Search.." className='w-full pl-2 text-red-500 h-12 rounded-md bg-blue-50 overflow-hidden' onChange={searchHandler}/>
        <button className='absolute right-5 '>
           <img src={Search} alt="Search Bar" className='w-10'/>
        </button>
      </div> 
      {data.map((item, index) => {
        if(searchData){
          if(item.toLowerCase().includes(searchData.toLowerCase())){
            return <div className=' rounded bg-blue-100 mt-4 mx-4 flex items-center justify-between max-[620px]:h-20' key={index}>
              <div className="flex py-4 px-4 items-center gap-5">
                <input
                  type="checkbox"
                  id={index}
                  name="status"
                  checked={taskCompleted[`${index}`]}
                  className="checkbox"
                  onChange={changeHandler}
                />
                <h1 className='font-bold'>Task {index + 1}</h1>

                 <p className={`[@media(max-width:412px)]:text-sm [@media(max-width:368px)]:text-xs  ${taskCompleted[`${index}`] ? 'line-through' : ''}`}>{width <= 370 ? (item.slice(0, 10) + '...') : (item)}</p>


              </div>
              <div className=" [@media(max-width:412px)]:mb-1rem flex gap-5 pr-5 item-center justify-center">
                <button>
                  <img src={Pen} alt="" onClick={() => updateHandler(index, item)} className="w-10 max-[620px]:w-7" />
                </button>
                <button>
                  <img src={Trash} alt="" onClick={() => deleteHandler(index)} className="w-10 max-[620px]:w-7" />
                </button>
              </div>
            </div>
          }
          
        }
      else{
        
        return <div className=' rounded bg-blue-100 mt-4 mx-4 flex items-center justify-between max-[620px]:h-20' key={index}>
          <div className="flex py-4 px-4 items-center gap-5">
            <input
              type="checkbox"
              id={index}
              name="status"
              checked={taskCompleted[`${index}`]}
              className="checkbox"
              onChange={changeHandler}
            />
            <h1 className='font-bold'>Task {index + 1}</h1>
           
            <p className={`[@media(max-width:412px)]:text-sm [@media(max-width:368px)]:text-xs  ${taskCompleted[`${index}`] ? 'line-through' : ''}`}>{width <= 370 ? item.slice(0, 10) + '...' : item}</p>
          
         
      
          </div>
          <div className=" [@media(max-width:412px)]:mb-1rem flex gap-5 pr-5 item-center justify-center">
            <button>
              <img src={Pen} alt="" onClick={() => updateHandler(index, item)} className="w-10 max-[620px]:w-7" />
            </button>
            <button>
              <img src={Trash} alt="" onClick={() => deleteHandler(index)} className="w-10 max-[620px]:w-7" />
            </button>
          </div>
        </div>
      }
      })}
    </div>
  );
}

export default TaskList;

