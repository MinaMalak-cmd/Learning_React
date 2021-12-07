import { useState } from "react"

const Home = () => {
    let x = 'black';
    let randomColor='#' + ((1<<24)*Math.random() | 0).toString(16);
    const [col,setCol] = useState(randomColor)
    const handleClick = (e) =>{
        setCol('#' + ((1<<24)*Math.random() | 0).toString(16));
        console.log(x,randomColor)
    }
    const handleClickVar = (name,e) =>{
        console.log("hii",name,e)
    }
    return ( 
        <div className="home" style={{
            backgroundColor : col
        }}>
            Home Content
            <button onClick={handleClick}>Change Color</button>
            {/* <p>my name is {name} and i'm {age} years old</p> */}
            <p>my name is Mina and i'm 24 years old</p>
            {/* <button onClick={(e)=>handleClickVar('ashraf',e)}>Click To get data</button> */}

        </div>
     );
}
 
export default Home;