// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

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

// نجيب كل العناصر اللي فيها كلاس "stars"
document.querySelectorAll(".stars").forEach((container) => {
  // جوا كل container نجيب النجوم (span)
  const stars = container.querySelectorAll("span");

  // نعمل event لكل نجمة
  stars.forEach((star, i) => {
    // لما يدوس على نجمة
    star.addEventListener("click", () => {
      // نلوّن النجوم: اللي قبل اللي اتداس عليها + هي كمان تبقى ممتلئة (★)
      stars.forEach((s, j) => (s.textContent = j <= i ? "★" : "☆"));

      // نخزن الريت في data attribute اسمه rating
      container.dataset.rating = i + 1;
    });
  });
});

// 💬📩 نظام كتابة الـ Review وإظهارها 💬

// نجيب كل review box
document.querySelectorAll(".review").forEach((review) => {
  // نجيب input + زرار الإرسال + مكان عرض الريفيو
  const input = review.querySelector(".reviewInput");
  const btn = review.querySelector(".submitReview");
  const output = review.querySelector(".reviewOutput");

  // لما المستخدم يدوس Submit
  btn.addEventListener("click", () => {
    // لو الـ input فاضي → ميفعش تبعتي حاجة
    if (input.value.trim() === "") return;

    // نحط الكلام اللي كتبه المستخدم في الـ output
    output.textContent = input.value;

    // نخفي الـ input والزرار بعد الإرسال
    input.style.display = "none";
    btn.style.display = "none";
  });
});
