import React, { useState } from 'react';
import Pen from "../images/pen.png";
import Trash from "../images/trash.png";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { refreshSliceActive } from "../redux/refreshSlice";
import {updateSliceActive} from "../redux/updateSlice";
//After creating a data in local storage we need to fetch that data and display it in TaskList Component.
const TaskList = () => {

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

  return (
    <div>
      {data.map((item, index) => {
        return <div className=' rounded bg-blue-100 mt-4 mx-4 flex items-center justify-between max-[620px]:h-20' key={index}>
          <div className="flex py-4 px-4 items-center gap-5">
            <h1>Task {index + 1}</h1>
            <p>{item}</p>
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
      })}
    </div>
  );
}

export default TaskList;
