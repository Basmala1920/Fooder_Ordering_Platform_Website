// hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// dropdown
const dropdown = document.querySelector(".dropdown > a");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("click", (e) => {
  e.preventDefault(); 
  dropdownMenu.classList.toggle("active");
});


// Select the rider icon (not used globally since each order has its own rider)
const rider = document.querySelector(".rider");

// Select all tracker steps (not used but kept for reference)
const steps = document.querySelectorAll(".tracker-step");

// Select all orders on the page
const orders = document.querySelectorAll(".order-summary");

// Loop through each order to set rider position based on order status
orders.forEach((order) => {
  // Get final status text (Delivered, Canceled, etc.)
  const finalStatus = order.querySelector(".final-status");

  // Timeline container
  const tracker = order.querySelector(".order-tracker");

  // Rider icon inside this order
  const rider = order.querySelector(".rider");

  // If any required element is missing, skip this order
  if (!finalStatus || !tracker || !rider) return;

  // Convert status text to lowercase for easier checking
  const status = finalStatus.textContent.toLowerCase();

  // Set rider position based on status
  if (status.includes("progress")) {
    // Order is still being prepared
    rider.style.left = "0%";
    tracker.classList.add("progress");
  } else if (status.includes("on")) {
    // Order is currently on the way
    rider.style.left = "50%";
    tracker.classList.add("onway");
  } else if (status.includes("delivered")) {
    // Order reached destination
    rider.style.left = "100%";
    tracker.classList.add("delivered");
  } else if (status.includes("cancel")) {
    // Order was canceled (place rider at the end)
    rider.style.left = "100%";
    tracker.classList.add("cancelled");
  }
});

// Toggle order details (expand / collapse) when clicking the order box
orders.forEach((order) => {
  order.addEventListener("click", () => {
    // Select the details container inside the clicked order
    const details = order.querySelector(".order-details");

    // Show or hide details section
    details.style.display =
      details.style.display === "block" ? "none" : "block";
  });
});
