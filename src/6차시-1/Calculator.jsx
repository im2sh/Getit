import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props){
    if(props.celsius>=100){
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}
function Calculator(props){
    const [temperature,setTemperature] = useState('');
    const [scale,setScale] = useState('c');

    const handleCelsiusChange = (temperature) =>{
        setTemperature(temperature);
        setScale('c');
    }

    const handleFahrenheitChange = (temperature)=>{
        setTemperature(temperature);
        setScale('f');
    }

    const celsius = scale === 'f' ? tryConvert(temperature,toCelsius):temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit):temperature;

    return(
        <div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange = {handleCelsiusChange}/>
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    )
}
function toCelsius(fahrenheit){
    return (fahrenheit - 32)* 5/9;
}
function toFahrenheit(celsius){
    return (celsius * 9/5)+32;
}
function tryConvert(temperature,convert){
    const input = parseFloat(temperature);
    //input이 비어있을 경우 빈 문자열 반환
    if(Number.isNaN(input)){
        return '';
    }
    //convert는 다른 함수가 들어오는 자리
    const output = convert(input); //tryConvert(30,toFahrenheit) = 30 도를 화씨로 
    const rounded = Math.round(output*1000)/1000; //세자리 수까지만 출력되도록
    return rounded.toString();
}
export default Calculator;