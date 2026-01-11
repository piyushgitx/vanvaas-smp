// const copyBtn1 = document.getElementById("copyIpBtn");
// const copyBtn2 = document.getElementById("copyIpBtn2");
// const serverIp = document.getElementById("serverIp").innerText;
// const toast = document.getElementById("toast");

// function copyIP() {
//   navigator.clipboard.writeText(serverIp).then(() => {
//     toast.style.display = "block";
//     setTimeout(() => {
//       toast.style.display = "none";
//     }, 1500);
//   });
// }

// copyBtn1.addEventListener("click", copyIP);
// copyBtn2.addEventListener("click", copyIP);

// // Mobile menu
// const menuBtn = document.getElementById("menuBtn");
// const navLinks = document.getElementById("navLinks");

// menuBtn.addEventListener("click", () => {
//   navLinks.classList.toggle("show");
// });





document.addEventListener("DOMContentLoaded", () => {

  const copyBtn1 = document.getElementById("copyIpBtn");
  const copyBtn2 = document.getElementById("copyIpBtn2");

  const serverIpElement = document.getElementById("serverIp");
  const toast1 = document.getElementById("toast");
  const toast2 = document.getElementById("toast2");

  if (!serverIpElement) return;
  const serverIp = serverIpElement.innerText;

  function showToast(el){
    if (!el) return;
    el.style.display = "block";
    setTimeout(() => {
      el.style.display = "none";
    }, 1500);
  }

  function copyIP(toastElement) {
    navigator.clipboard.writeText(serverIp).then(() => {
      showToast(toastElement);
    }).catch(() => {
      alert("❌ Copy failed. IP: " + serverIp);
    });
  }

  if (copyBtn1) copyBtn1.addEventListener("click", () => copyIP(toast1));
  if (copyBtn2) copyBtn2.addEventListener("click", () => copyIP(toast2));

});
