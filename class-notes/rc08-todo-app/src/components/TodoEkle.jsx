import React, { useState } from 'react'

const TodoEkle = ({doing,setDoing}) => {
    const [button, setButton] = useState(true)
    const [texT, setText] = useState("")
    const [day, setDay] = useState("")

    const handleSubmiTT = (e) => {
        e.preventDefault()
        setDoing([...doing, {id: doing.length, text: texT, day: day, isDone: false}])

        // input alanlarını boşaltmak için, altta inputlara value veriyoruz, burada da temizliyoruz
        setText("")
        setDay("")


    }

  return (
    <div>
        <header>
            <h1>To do App</h1>
            <button onClick={()=>setButton(!button)} className='btn' style={{backgroundColor:button ? "green" : "purple"}}> {button ? "CLOSE" : "SHOW"} ADD TASK BAR</button>
        </header>

        {button && (
            <form onSubmit={handleSubmiTT}>
                <div className='formControl'>
                    <label htmlFor="text">Task</label>
                    <input type="text" id='text' onChange={(e)=>setText(e.target.value)} value={texT}/>
                </div>
            
                <div className='formControl'>
                    <label htmlFor="day">Day & Time</label>
                    <input type="datetime-local" id='day' onChange={(e)=>setDay(e.target.value)} value={day}/>
                </div>
            
                <button type='submit' className='btn btn-submit'>SUBMIT</button>

            </form>
        )}
        
    </div>
  )
}

export default TodoEkle