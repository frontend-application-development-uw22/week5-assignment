import { Link } from 'react-router-dom';
import App from '../App';

function Nav() {

  return (
    <Link 
      to={{
        pathname: "/"
      }}
      element={<App />}
    >
      <header>
        <h1>
          nano_animol
        </h1>
      </header>
    </Link>
  );

}

export default Nav;
