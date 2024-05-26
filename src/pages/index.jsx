import { render } from '@czechitas/render';
import '../global.css';
import { Header } from '../components/header';
import { Estate } from '../components/estate';

const dum1_href = 'dum01.html'
const dum2_href = 'dum02.html'
const dum3_href = 'dum03.html'
const dum4_href = 'dum04.html' 

const actualPage = window.location.pathname 
// /dum01.html
const pageName = actualPage.slice(1,6)
const response = await fetch(`https://apps.kodim.cz/daweb/trening-api/apis/realitka/${pageName}`);
const data = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header dum1_href = {dum1_href} dum2_href = {dum2_href} dum3_href = {dum3_href} dum4_href = {dum4_href} />
    <Estate title = {data.title} text = {data.text} price = {data.price} city = {data.city} contactName = {data.contact.name} contactEmail = {data.contact.email} contactPhone = {data.contact.phone} photoSrc = {data.photo}/>
  </div>
);