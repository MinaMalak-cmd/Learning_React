import './NotFound.css';
import {Link} from 'react-router-dom';
import img from './notFoundPage.jpg';
const NotFound = () => {
    
    return ( 
        <div>
            <img src={img} alt="" style={{
                width: "100%",
                height: "100%",
                display: 'block'
                }}/>
            <Link to='/' className="home-not-found">Go to Home</Link>
        </div>
      );
}
 
export default NotFound;