import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <Link
        to='https://github.com/rjshkhr/cleanfolio'
        className='link footer__link'
      >
        Created By Ebrahim Ahmed Shaif Miah
      </Link>
    </footer>
  );
}

export default Footer;
