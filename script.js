 // Thumbnail switcher
        const thumbs = document.querySelectorAll(".thumb");
        const mainImg = document.getElementById("main-img");
        thumbs.forEach((thumb) => {
            thumb.addEventListener("click", () => {
                document.querySelector(".thumb.active").classList.remove("active");
                thumb.classList.add("active");
                mainImg.src = thumb.src;
            });
        });

        // Lightbox
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        const closeLightbox = document.getElementById("close-lightbox");
        mainImg.addEventListener("click", () => { lightbox.style.display = "flex"; lightboxImg.src = mainImg.src; });
        closeLightbox.addEventListener("click", () => { lightbox.style.display = "none"; });

        // Quantity
        const plus = document.getElementById("plus");
        const minus = document.getElementById("minus");
        const count = document.getElementById("count");
        let quantity = 0;
        plus.addEventListener("click", () => { quantity++; count.textContent = quantity; });
        minus.addEventListener("click", () => { if (quantity > 0) { quantity--; count.textContent = quantity; } });

        // Cart
        const addToCartBtn = document.getElementById("add-to-cart");
        const cartIcon = document.getElementById("cart-icon");
        const cartCount = document.getElementById("cart-count");
        const cartDropdown = document.getElementById("cart-dropdown");
        const cartItems = document.getElementById("cart-items");
        let cart = [];
        addToCartBtn.addEventListener("click", () => { if (quantity > 0) { cart = [{ name: "Fall Limited Edition Sneakers", price: 125, qty: quantity }]; updateCart(); } });
        cartIcon.addEventListener("click", () => { cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block"; });
        function updateCart() {
            cartItems.innerHTML = "";
            if (cart.length === 0) { cartItems.innerHTML = "<p>Your cart is empty</p>"; cartCount.style.display = "none"; } else {
                cart.forEach(item => {
                    const div = document.createElement("div");
                    div.classList.add("cart-item");
                    div.innerHTML = `<span>${item.name}</span><span>${item.qty} x $${item.price} = $${item.qty * item.price}</span><button onclick="removeItem()">❌</button>`;
                    cartItems.appendChild(div);
                });
                cartCount.textContent = cart[0].qty;
                cartCount.style.display = "block";
            }
        }
        function removeItem() { cart = []; updateCart(); }

        // Hamburger menu
        const hamburger = document.getElementById("hamburger");
        const navLinks = document.getElementById("nav-links");
        hamburger.addEventListener("click", () => { navLinks.classList.toggle("show"); });

        // Close cart dropdown when clicking outside
        document.addEventListener("click", (e) => {
            if (!cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
                cartDropdown.style.display = "none";
            }
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove("show");
            }
        });

         // Theme toggle with persistence
    // const themeToggle = document.getElementById("theme-toggle");
    // const currentTheme = localStorage.getItem("theme");

    // if (currentTheme === "dark") {
    //   document.body.classList.add("dark");
    //   themeToggle.textContent = "☀️";
    // }

    // themeToggle.addEventListener("click", () => {
    //   document.body.classList.toggle("dark");
    //   let theme = "light";
    //   if (document.body.classList.contains("dark")) {
    //     theme = "dark";
    //     themeToggle.textContent = "☀️";
    //   } else {
    //     themeToggle.textContent = "🌙";
    //   }
    // });
