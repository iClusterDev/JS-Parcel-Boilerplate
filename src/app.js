import './scss/main.scss';
import Header from './components/Header';

const app = () => {
  document.getElementById('header').innerHTML = Header();
};

app();
