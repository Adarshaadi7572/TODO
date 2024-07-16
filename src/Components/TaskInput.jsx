import React, { useState, useEffect } from 'react';
import update from '../images/update.png';
import solid from '../images/solid.svg';
import { refreshSliceActive } from "../redux/refreshSlice";
import { useDispatch, useSelector } from "react-redux";
//In this component we are dealing with two thing, one is to create data and dave it in your local storage and second is to update the data in local storage i have added the functionality that when we click on pen image in TaskList Compponent it will dispatch a reducer function updateSliceActive which takes item(data) and index as an argument and through the action we send that data in Task input and set the defaullt value of input to that data and call updateHandler function.
const TaskInput = () => {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState('');
    const array = JSON.parse(localStorage.getItem('task')) ?? [];
    const dispatch = useDispatch();
    const refreshkey = useSelector((state) => state.refreshKey)
    const updateData = useSelector((state) => state.updateData);
    console.log("data", data);
    console.log("updateData", updateData);
   
    // const updateHandler = () =>{
    useEffect(() => {
        if (updateData.item) {
            setVisible(true);
            setData(updateData.index.payload.item);
        }
    }, [updateData]);
    // }
    // console.log("index final", updateData.index.payload.index)
    const updateHandler = (e) => {
        e.preventDefault();
        let oldData = JSON.parse(localStorage.getItem('task')) ?? [];
        console.log("oldData", oldData);
        oldData[updateData.index.payload.index] = data;
        console.log("updated Data", oldData);
        localStorage.setItem('task', JSON.stringify(oldData));
        dispatch(refreshSliceActive());
        setVisible((state) => !state);
        setData('');
    }

    const submitHandler = (e) => {
      

            e.preventDefault();
            array.push(data);
            console.log("array", array);
            localStorage.setItem('task', JSON.stringify(array));
            e.target.reset();
            dispatch(refreshSliceActive());
        
    }
    const changeHandler = (e) => {
        e.preventDefault();
        setData(e.target.value);
    }
    return (
        <div>
            <form onSubmit={submitHandler} className="  rounded bg-blue-100 mt-4 mx-4 flex items-center justify-between gap-5 ">
                <div className="flex py-4 px-4 items-center gap-5 grow-[0.7]">

                    <label htmlFor="Task" className="py-2 font-bold font-Mulish text-xl">Task</label>
                    <input type="text" name="Task" id="Task" placeholder="Todo Task" className="w-[70vw] max-[620px]:w-[50vw] max-[370px]:w-[40vw] pl-2 text-red-500 h-10 rounded-md bg-blue-50 overflow-hidden" onChange={changeHandler} value={data} required />
                </div>
            
                <button type='submit' className={`w-8 h-24 -translate-x-10 ${visible ? 'hidden' : ''}`}>
                    <img src={solid} />
                </button>
            
                <button id="upd" onClick={updateHandler} className={`w-10 max-[620px]:w-7  h-24 -translate-x-10 ${visible ? '' : 'hidden'}`}>
                    <img src={update} />
                </button>

            </form>
        </div>
    )
}
export default TaskInput;