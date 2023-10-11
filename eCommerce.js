const cartBtn = document.querySelector(".cart-button");
const lightboxContainer = document.querySelector(".lightbox-container");
const activeImg = document.querySelector(".active-image img");

//Main product image array
const productImg = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

//Thumbnails functionality on main page
const thumbnailsImg = document.querySelectorAll(".thumbnails img");

thumbnailsImg.forEach((thumbnail, i) => {
  thumbnail.addEventListener("click", () => {
    const selectedProduct = productImg[i];
    console.log(productImg[i]);
    activeImg.src = selectedProduct;
  });
});

// Click event listener for the main product image
activeImg.addEventListener("click", () => {
  // Using innerHTML to add the lightbox content on the page
  lightboxContainer.innerHTML = `<img src="/images/icon-close.svg" alt="" class="close-icon"/>
    <section class="lightbox__product-image">
      <div class="lightbox__active-image">
    
        <img src="/images/image-product-1.jpg" alt="" />
        <div class="lightbox__icon-previous">
          <img src="/images/icon-previous.svg" alt="" />
        </div>

        <div class="lightbox__icon-next">
          <img src="/images/icon-next.svg" alt="" />
        </div>
      </div>

      <div class="lightbox__thumbnails">
      
        <img src="/images/image-product-1-thumbnail.jpg" alt="" />
        <img src="/images/image-product-2-thumbnail.jpg" alt="" />
        <img src="/images/image-product-3-thumbnail.jpg" alt="" />
        <img src="/images/image-product-4-thumbnail.jpg" alt="" />
      </div>
    </section>`;

  //Lightbox and thumbnails functionality
  const activeImgLightbox = document.querySelector(
    ".lightbox__active-image img"
  );
  const lightboxThumbnailImg = document.querySelectorAll(
    ".lightbox__thumbnails img"
  );

  lightboxThumbnailImg.forEach((thumbnail, i) => {
    thumbnail.addEventListener("click", () => {
      const selectedProduct = productImg[i];
      activeImgLightbox.src = selectedProduct;
    });
  });

  // Lightbox previous and next buttons
  const previousBtn = document.querySelector(".lightbox__icon-previous");
  const nextBtn = document.querySelector(".lightbox__icon-next");
  let currentIndex = 0;

  previousBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + productImg.length) % productImg.length;
    activeImgLightbox.src = productImg[currentIndex];
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % productImg.length;
    activeImgLightbox.src = productImg[currentIndex];
  });
  // Lightbox container has the class .hidden by default hence the toggle to make the lightbox visible/invisible
  lightboxContainer.classList.toggle("hidden");
});

// Lightbox close button functionality
lightboxContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("close-icon") ||
    event.target === lightboxContainer
  ) {
    lightboxContainer.classList.add("hidden");
  }
});

/* Add and Minus buttons functionality */

const addBtn = document.querySelector(".add");
const minusBtn = document.querySelector(".minus");
const quantity = document.querySelector(".quantity-count");
quantity.textContent = 0;

addBtn.addEventListener("click", () => {
  quantity.textContent++;
});

minusBtn.addEventListener("click", () => {
  quantity.textContent--;
});

//Cart icon button functionality
const cartContainer = document.querySelector(".cart-status");
const addToCartBtn = document.querySelector(".add-to-cart");

cartBtn.addEventListener("click", () => {
  cartContainer.classList.toggle("hidden");

  cartCompilation();
});

//Add to cart button functionality
addToCartBtn.addEventListener("click", () => {
  cartContainer.classList.remove("hidden");

  cartCompilation();
});

//This function works the product for total items and cost which runs the "Add to cart" button and the cart icon
function cartCompilation() {
  if (quantity.textContent == 0) {
    cartContainer.innerHTML = `<h3>Cart</h3>
      
            <div class="item-content">
              <p>Your cart is empty</p>
            </div>`;

    return;
  } else {
    cartContainer.innerHTML = "";

    cartContainer.innerHTML = `<h3>Cart</h3>
      
    <div class="item-content">
      <div class="current-cart-items">
        <img
          src="/images/image-product-1-thumbnail.jpg"
          alt=""
          class="item"
        />
    
        <div class="cart-information">
          <p>Fall Limited Edition Sneakers</p>
          <p>$125.00 * ${quantity.textContent} <span class = "total">$${
      125 * Number(quantity.textContent)
    }.00</span></p>
        </div>
        <img src="/images/icon-delete.svg" alt="" class="delete-icon"/>
      </div>
      <button>Checkout</button>
    </div>`;
  }

  //Adding functionality to the delete icon/button
  const deleteBtn = document.querySelector(".delete-icon");
  deleteBtn.addEventListener("click", () => {
    if (quantity.textContent == 0) {
      return;
    } else {
      cartContainer.innerHTML = `<h3>Cart</h3>
      
            <div class="item-content">
              <p>Your cart is empty</p>
            </div>`;
    }
  });
}

//Hamburger menu

const hamburgerBtn = document.querySelector(".hamburger");
const sidebarBackground = document.querySelector(".sidebar-background");
const sidebar = document.querySelector("header ul");

hamburgerBtn.addEventListener("click", () => {
  sidebarBackground.classList.toggle("active");
  sidebar.classList.toggle("remove");
  sidebar.classList.toggle("active");
});

//Main page previous and Next buttons
const previousBtn = document.querySelector(".lightbox__icon-previous");
const nextBtn = document.querySelector(".lightbox__icon-next");
let currentIndex = 0;

previousBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + productImg.length) % productImg.length;
  activeImg.src = productImg[currentIndex];
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % productImg.length;
  activeImg.src = productImg[currentIndex];
});
