
import { Link } from 'react-router-dom'


const WelcomeBody = () => {
    
    return (
        
        <div className="linkToSignUp">
            <body>
            
                <Link to ="/signup" className='SignUpText'>
                    <h2>Sign Up</h2>
                </Link>
            </body>
        </div>
 
    )
  }
  
  export default WelcomeBody

