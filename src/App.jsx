import React , {useState} from "react";
let App=()=>{
    let time=new Date().toLocaleTimeString();
    let[cTime,updatedTime]=useState(time);
    let UpdatedTime=()=>(
        updatedTime(new Date().toLocaleTimeString())
    )
    setInterval(UpdatedTime,1000);
    return(<>
    <h1>Digital Clock</h1>
    <div className='count'>
         <div>
        <h2>
            {cTime}
        </h2>
        </div>
        </div>
    </>
)
    }
export default App;