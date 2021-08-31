if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    const closeCart = document.getElementById('quit-btn');
    const openCart = document.getElementById('cart');
    const cartDiv = document.getElementById('cart-list');
    closeCart.addEventListener('click', () => {
        cartDiv.style.display = "none";
    })

    openCart.addEventListener('click', () => {
        cartDiv.style.display = "block";
    })

    var addItemToCart = document.getElementsByClassName('buy-btn');
    //looping through the buttons with the same class name
    for (var i = 0; i < addItemToCart.length; i++) {
        var addToCart = addItemToCart[i];
        addToCart.addEventListener('click', GetItemInfo);
    }
}

function RemoveItem(event) {
    var btn = event.target;
    btn.parentElement.parentElement.remove();
    UpdateCart();
}

//creating a function to get the element of the object based on mouse target.
function GetItemInfo(event) {
    var moustTarget = event.target//getting the target of the mouse click
    var selectedItem = moustTarget.parentElement;   //targeting the parent element
    var movieName = selectedItem.getElementsByClassName('movie-title')[0].innerText;
    var moviePrice = selectedItem.getElementsByClassName('movie-price')[0].innerText / 100;
    AddToCart(movieName, moviePrice);
    UpdateCart();
}

const pay = document.getElementsByClassName('pay-btn')[0];
pay.addEventListener('click',ClearCart);

function ClearCart(){
    const cart = document.getElementsByClassName('cart-body')[0];
    do{
        cart.removeChild(cart.firstChild);  //removing the first child on the list with do while loop
        UpdateCart();
    }while(cart.hasChildNodes())       
}

function UpdateCart(){
    const cart = document.getElementsByClassName('cart-body')[0];
    var cartItems = cart.getElementsByClassName('item-details')
    var total = 0;
    for(var i = 0; i<cartItems.length;i++){
        var currentItem = cartItems[i]
         //getting the text of the element and replaced the dollar sign with nothing to do total calculation
        var itemPrice = document.getElementsByClassName('item-price')[0].innerText.replace("$","");
        total = itemPrice*(i+1);    //total = amount of items * the price i started at 0 so needed to add 1 to it
    }
    //rounding to the nearest 2decimal points
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total-amount')[0].innerText = "Total : $"+ total;//assigning total amount to the element
}

//needs to add item to the cart
function AddToCart(itemName, itemPrice,id) {
    var cartBody = document.getElementsByClassName('cart-body')[0];
    var cartItem = document.createElement('div')
    cartItem.classList.add("item-details");
    
    var checkExist = cartItem.getElementsByClassName('item-name');   //getting the name of the food in the cart
    //checking for item name to see if it already exist, if so alert the user that the item already existed.
    for (var i = 0; i < checkExist.length; i++) {
        if (checkName[i].innerText == itemName) {
            alert("Item is already in the cart");
            return;
        }
    }

    //create a collection of elements based on user selection 
    var addedItem = `<div class="item-name">
                            ${itemName}
                        </div>
                        <div class="item-price" >
                            $ ${itemPrice}
                        </div>
                        <div class="item-remove">
                            <i class="far fa-trash-alt remove-item"></i>
                        </div>`

    //assining collection of elements to a new div as innerHTML
    cartItem.innerHTML = addedItem;
    //adding item list using the append method.
    cartBody.append(cartItem);

    //because the item wasn't added to the cart when the page was loaded. 
    //So I needed to add the eventlistener to the btn in order for the user to remove the item
    cartItem.getElementsByClassName('item-remove')[0].addEventListener('click',RemoveItem);
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 35, //rotating the angel of the image
        depth: 650, //depth of the collection the higher, the more u can see
        modifier: 1,
        slideShadows: false,
    },
    loop: true,  //infinite loop
    pagination: {
        el: ".swiper-pagination",
    },
});