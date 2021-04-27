import './First.css';

function First(){
    const str ="welcome to react project";
    const no =10;
    const arr =[1,3,5,6]
    let obj = {name:"sd",age:23}
    return (
        <div className="hi">
            <p>{str}</p>
        {/* <p className="title">{Math.random()*20}</p> */}
        <p>my age is: {obj.age}</p>
        </div>
    );
}
export default First;
