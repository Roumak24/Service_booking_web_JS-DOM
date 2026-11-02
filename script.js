// ---------- 1. Our list of services ----------
var services = [
  { name: "Dry Cleaning",            price: 200,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpk9tXKGI39bFzbTag02GbKMPwc_51y7G6cu7hDLGYQ&s=10" },
  { name: "Leather & Suede Cleaning", price: 999,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3Zl2wbMfdgnWjAWoibvNNNw7-yC7RWEpU1r96FUVYw&s=10" },
  { name: "Ironing",                 price: 30,   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1Pt62RJwRiBjr4NntAFjEgujEGNK1qicNQybsyWNpg&s=10" },
  { name: "Wedding Dress Cleaning",  price: 2400, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmmys1Bzy_92GW12I5LE5tffG-WljkCzJtneDhOhqTXw&s=10" },
  { name: "Wash And Fold",           price: 140,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7a3enOI6UkYTa9dz6T3yKEbI46LKiDN53QDdoJ5UVTA&s=10" },
  { name: "Stain Removal",           price: 500,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIE-XU_ldpKMPvPuJoN4JwddndVKSmpNme7Qyfe_SzOg&s=10" }
];

// ---------- 2. Variables that remember things ----------
var currentIndex = 0;   // which service is showing right now
var cart = [];          // the services the user added

// ---------- 3. Get the elements from the HTML ----------
var serviceImage = document.getElementById("serviceImage");
var serviceName  = document.getElementById("serviceName");
var servicePrice = document.getElementById("servicePrice");
var skipBtn      = document.getElementById("skipBtn");
var addBtn       = document.getElementById("addBtn");
var itemList     = document.getElementById("itemList");
var totalAmount  = document.getElementById("totalAmount");
var bookBtn      = document.getElementById("bookBtn");
var message      = document.getElementById("message");
var logoutBtn    = document.getElementById("logoutBtn");

// ---------- 4. Show the current service on the right ----------
function showService() {
  var service = services[currentIndex];
  serviceImage.src = service.image;
  serviceName.textContent = service.name;
  servicePrice.textContent = "₹" + service.price.toFixed(2);
}

// ---------- 5. Go to the next service ----------
function nextService() {
  currentIndex = currentIndex + 1;

  // If we passed the last service, go back to the first one
  if (currentIndex >= services.length) {
    currentIndex = 0;
  }

  showService();
}

// ---------- 6. Update the added items list on the left ----------
function showCart() {
  // If the cart is empty, show the "No Items Added" message
  if (cart.length === 0) {
    itemList.innerHTML =
      '<div class="empty">' +
        '<div class="empty-icon">i</div>' +
        '<p class="empty-title">No Items Added</p>' +
        '<p class="empty-text">Add items to the cart from the services bar</p>' +
      '</div>';

    totalAmount.textContent = "₹ 0";
    bookBtn.disabled = true;   // can't book with an empty cart
    return;
  }

  // Otherwise, build one row for each item in the cart
  var rows = "";
  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    rows = rows +
      '<div class="item-row">' +
        '<span class="col-no">' + (i + 1) + '</span>' +
        '<span class="col-name">' + cart[i].name + '</span>' +
        '<span class="col-price">₹' + cart[i].price.toFixed(2) + '</span>' +
      '</div>';

    total = total + cart[i].price;
  }

  itemList.innerHTML = rows;
  totalAmount.textContent = "₹ " + total.toFixed(2);
  bookBtn.disabled = false;    // now the user can book
}

// ---------- 7. Skip button ----------
skipBtn.addEventListener("click", function () {
  nextService();
});

// ---------- 8. Add button ----------
addBtn.addEventListener("click", function () {
  var service = services[currentIndex];

  // Only add the service if it is not already in the cart
  if (cart.indexOf(service) === -1) {
    cart.push(service);
    showCart();
    message.textContent = "";
  }

  nextService();
});

// ---------- 9. Book now button ----------
bookBtn.addEventListener("click", function () {
  var name  = document.getElementById("fullName").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();

  // Check that all the fields are filled
  if (name === "" || email === "" || phone === "") {
    message.className = "message error";
    message.textContent = "Please fill in your name, email and phone number.";
    return;
  }

  // Check that the email looks right
  if (email.indexOf("@") === -1) {
    message.className = "message error";
    message.textContent = "Please enter a valid email.";
    return;
  }

  // Everything is fine
  message.className = "message success";
  message.textContent = "Thank you, " + name + "! Your booking is confirmed.";

  // Clear the cart and the form
  cart = [];
  showCart();
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
});

// ---------- 10. Logout button ----------
logoutBtn.addEventListener("click", function () {
  alert("You have been logged out.");
});

// ---------- 11. Run when the page opens ----------
showService();
showCart();