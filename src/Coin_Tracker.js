

import { useEffect, useState } from "react";
import styles from "./css/Coin.module.css"

function Coin_Tracker()
{
    const [loading,setLoading] =useState(true);
    const [coin,setCoins] = useState([]); //기본값 []를 하지않으면 에러가남.
    const [selectusd,SetSelect] = useState([]);
    const [inputval,setInputval] = useState(0);
    useEffect(()=>
    {
        fetch("https://api.coinpaprika.com/v1/tickers").then((response)=> response.json()).then((json)=>{
            console.log(json);
            setCoins(json);
            setLoading((current)=> current = false);
        });
    },[]) // 한 번만 실행 


    const onSelect=((event)=>{
        if(event.target.value==="선택해주세요")
        {
            alert("다른 것선택");
            SetSelect([]);
            setInputval(0);
        }
        else{
            const etv=JSON.parse(event.target.value);
            console.log(etv);
            if(isNaN(etv.quotes.USD.price)===false) //숫자가 아닐때 true 반환 
            {
                console.log(event.target.value);
                SetSelect([etv.quotes.USD.price, etv.symbol]);
                setInputval(0);
            }
            else{
    
                SetSelect([]);
            }
        }


    })

    const onSubmit=((event)=>{
        event.preventDefault(); 
        // console.log(event.target.firstChild.value);
        if(!event.target.firstChild.value)
        {
            alert("값을 입력해주세요");
        }
        else if(selectusd===0)
        {
            alert("코인을 선택해주세요");
        }
        else{
            console.log(event.target.firstChild.value);
            setInputval(event.target.firstChild.value); 
            event.target.firstChild.value=""
        }

    })

    return(
        <div>
            <h1>The Coins({loading ? null : coin.length })</h1>
            {loading ? <strong>Loding...</strong> :  
            <select onChange={onSelect}>
                <option>선택해주세요</option>
                {coin.map((coins)=>(
                <option key={coins.id} value={JSON.stringify(coins)} > {/*key는 고유해야하므로 coin안에있는 id를 사용,value를 넘길때 stringfy를 하는이유는 JSON형식이므로 객체는 변환해서 넘겨야함   */}
                    {coins.name}({coins.symbol}):{coins.quotes.USD.price.toFixed(5)}
                 </option>
                ))}{/*위의 coin의 의미는 각각의 coin을 의미한다. */}
            </select>}
            <form onSubmit={onSubmit}>
                <input type="double" className={styles.input} placeholder="input number..." ></input>
            </form>
            <h2>{inputval > 0 ? inputval+ ` USD = ` : null} {selectusd[0] > 0 && inputval > 0 ? (inputval/selectusd[0]).toFixed(3) : null} {inputval > 0 ? selectusd[1]:null} </h2>
           
        </div>
    )

}

export default Coin_Tracker; //함수 이름 