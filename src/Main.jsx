import {useState, useEffect} from 'react';

function Main(){
    return (
        <div className='container'>
            <h1>Note your tasks</h1>

            <div className='input-field'>
                <input type='text' />
                <label>Task name</label>
            </div>
        </div>
    )
}

export default Main;
