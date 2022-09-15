import { useState } from 'react'
import './App.css'
import { makeAutoObservable} from "mobx"
import { observer } from "mobx-react-lite"

class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }
}

const myTimer = new Timer()

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
const TimerView = observer(({ timer }:{timer:Timer}) => <span>Seconds passed: {timer.secondsPassed}</span>)

setInterval(() => {
    myTimer.increaseTimer()
}, 1000)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TimerView timer={myTimer}/>
    </div>
  )
}

export default App
