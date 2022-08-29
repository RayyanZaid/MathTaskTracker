import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Word Problems hehe</h1>
        </Link>

        <Link to ="/login">
            <h2>Login</h2>
        </Link>

        
      </div>
    </header>
  )
}

export default Navbar