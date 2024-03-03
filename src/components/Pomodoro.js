import { CircularProgress, Input, Button } from '@mui/material';
import { useState, useEffect } from 'react';

const Pomodoro = () => {
    const [ count, setCount ] = useState()
    const [ time, setTime ] = useState(100)
    const [ factor, setFactor ] = useState()
    const [ inputValue, setInputValue ] = useState('')
    const [ isTimerRunning, setIsTimerRunning ] = useState(false)

    useEffect(()=>{
        if( isTimerRunning && time > 0 ){
            setTimeout(()=>{
            setTime(time - factor)
            setCount(count - 1)
        }, 1000)
        }
        if (time ==0){
            setTime(100)
            setFactor(null)
            setIsTimerRunning(false)
        }
    },[isTimerRunning, time])

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    
    const handleStartTimer = () => {
        const intValue = parseInt(inputValue);
        if(!isNaN(intValue) && intValue > 0) {
            setCount(intValue);
            setIsTimerRunning(true);
            setFactor(100/intValue);
        }
    }

    console.log(`count: ${count}, Time: ${time}, Factor: ${factor}`);

    return (
        <>
        <h1> Pomodoro timer </h1>
        <CircularProgress size="500px" thickness="2.7" variant="determinate" value={time}/>
        <Input autoFocus='true' placeholder='Enter Time' color='primary' disabled={isTimerRunning} onChange={handleInputChange}/>
        <Button color='primary' size='large' onClick={handleStartTimer} disabled={isTimerRunning} >Start</Button>
        <h1>Time: {count} </h1>
        </>
    )
};

export default Pomodoro;
