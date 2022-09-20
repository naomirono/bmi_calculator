import React, {useState} from "react";
import './index.css';

function App() {
  const[weight, setWeight]=useState(0);
  const[height, setheight]=useState(0)
  const[bmi, setBmi]=useState('')
  const[info, setInfo] = useState();
  const [isMousedOver, setMouseOver] = useState(false);


  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

const calcBmi=(event)=>{
  event.preventDefault()

  if(weight===0||height===0){
alert('Please enter a valid weight and height.');
  }else{
    const bmi=(
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(bmi);

    if (bmi < 18.5) {
      setInfo("Under Weight");
    } else if (bmi > 18.5 && bmi<= 24.9) {
      setInfo("Healthy");
    } else if (bmi > 24.9 && bmi < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  }
}
const reload=()=>{window.location.reload()};

  return (
    <div className="app">
      <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
      <div>
      <label>Weight (kg)</label>
        <input value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <div>
      <label>Height (cm)</label>
        <input value={height} onChange={(e)=>setheight(e.target.value)}/>
        </div>
        <div>
        <button className="btn" type="submit" style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >Submit</button>
        <button className="btn btn-outline" onClick={reload}  type="submit" >Reload</button>
        </div>
        </form>
        <div className="center">
          <h2>Your BMI is: {bmi}</h2>
          <p>{info}</p>
        </div>
    </div>
    </div>
  );
}

export default App;
