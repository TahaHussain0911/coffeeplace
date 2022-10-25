
let navbar = document.querySelector('ul');
let menu = document.querySelector('.fa-bars');
menu.onclick = () => {
    navbar.classList.toggle('active');
    cartitemcontainer.classList.remove('active');
    searchbox.classList.remove('active')
};
let searchbox = document.querySelector('.searchbox');
let searchbtn = document.querySelector('.firsticon .fa-magnifying-glass');
searchbtn.onclick = () => {
    searchbox.classList.toggle('active')
    navbar.classList.remove('active');
    cartitemcontainer.classList.remove('active');
}
let cartitemcontainer = document.querySelector('.card-item-container');
let cartbtn = document.querySelector('.firsticon .fa-cart-shopping');
cartbtn.onclick = () => {
    cartitemcontainer.classList.toggle('active');
    navbar.classList.remove('active');
    searchbox.classList.remove('active')
}
window.onscroll = () => {
    navbar.classList.remove('active');
    // cartitemcontainer.classList.remove('active');
    searchbox.classList.remove('active')

}

const menuarray = Array.from(document.querySelectorAll('#menu .row .menuitem .btn'));
const cartnumber = document.querySelector('.increment');
const cartcontainer = document.querySelector('.card-item-container')
const hidden = document.querySelector('.hidden');
const dollar = document.querySelector('.dollar');
var increment = Number(cartnumber.innerHTML);
const amount = document.querySelector('.amount');
let crossarray;
var total = 0;
menuarray.forEach(element => element.addEventListener('click', () => {
    hidden.classList.add('hidden');
    hidden.classList.remove('cart-empty');
    increment++;
    cartnumber.innerHTML = increment;
    amount.innerHTML = increment;
    const image = element.parentNode.querySelector('img');
    const heading = element.parentNode.querySelector('h3');
    const pricetag = element.parentNode.querySelector('.price');
    const newcartitem = document.createElement('div');
    newcartitem.classList.add('card-item');
    newcartitem.insertAdjacentHTML('beforeend', `<img src="" alt="">
    <div class="content">
        <h3></h3>
        <div class="price"></div>
    </div>
    <span class="cross"><i class="fa-solid fa-xmark"></i></span>`)
    newcartitem.querySelector('img').src = image.src;
    newcartitem.querySelector('div h3').innerText = heading.innerText;
    newcartitem.querySelector('div .price').innerText = pricetag.innerText;
    cartcontainer.insertAdjacentElement("afterbegin", newcartitem);
    const price = Number(pricetag.innerText.substring(1));
    total = total + price;
    dollar.innerText = total.toFixed(2);
    crossarray = Array.from(document.querySelectorAll('.cross'));
    crossarray.forEach(event => event.addEventListener('click', () => {

        cartcontainer.removeChild(event.parentNode);
        increment--;
        cartnumber.innerHTML = increment;
        amount.innerHTML = increment;
        total = total - Number(event.parentNode.querySelector('.price').innerText.substring(1));
        dollar.innerText = total.toFixed(2);

        console.log(increment);
        if (increment == 0) {
            hidden.classList.add('cart-empty');
            hidden.classList.remove('hidden');
            cartnumber.innerHTML = "";
            console.log('working')
            dollar.innerText = "";

        }
    }
    ))
}));
const prodarray=Array.from(document.querySelectorAll('.product .fa-cart-shopping'))
prodarray.forEach(element => element.addEventListener('click', () => {
    hidden.classList.add('hidden');
    hidden.classList.remove('cart-empty');
    increment++;
    cartnumber.innerHTML = increment;
    amount.innerHTML = increment;
    const image = element.parentNode.parentNode.querySelector('.image img');
    const heading = element.parentNode.parentNode.querySelector('h3');
    const pricetag = element.parentNode.parentNode.querySelector('.price');
    const newcartitem = document.createElement('div');
    newcartitem.classList.add('card-item');
    newcartitem.insertAdjacentHTML('beforeend', `<img src="" alt="">
    <div class="content">
        <h3></h3>
        <div class="price"></div>
    </div>
    <span class="cross"><i class="fa-solid fa-xmark"></i></span>`)
    newcartitem.querySelector('img').src = image.src;
    newcartitem.querySelector('div h3').innerText = heading.innerText;
    newcartitem.querySelector('div .price').innerText = pricetag.innerText;
    cartcontainer.insertAdjacentElement("afterbegin", newcartitem);
    const price = Number(pricetag.innerText.substring(1));
    total = total + price;
    dollar.innerText = total.toFixed(2);
    crossarray = Array.from(document.querySelectorAll('.cross'));
    crossarray.forEach(event => event.addEventListener('click', () => {

        cartcontainer.removeChild(event.parentNode);
        increment--;
        cartnumber.innerHTML = increment;
        amount.innerHTML = increment;
        total = total - Number(event.parentNode.querySelector('.price').innerText.substring(1));
        dollar.innerText = total.toFixed(2);

        console.log(increment);
        if (increment == 0) {
            hidden.classList.add('cart-empty');
            hidden.classList.remove('hidden');
            cartnumber.innerHTML = "";
            console.log('working')
            dollar.innerText = "";

        }
    }
    ))
}));