// ================== LOGIN SYSTEM ==================
const isLogin = localStorage.getItem("login");


const loginBtn = document.querySelector(".login");
const logoutBtn = document.querySelector(".logout");


// buka modal login
function openLogin() {
  const modal = document.getElementById("loginModal");
  if (modal) modal.style.display = "flex";
}

// submit login
function submitLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Isi username & password!");
    return;
  }

  localStorage.setItem("login", "true");
  location.reload();
}

// logout
function logout() {
  localStorage.removeItem("login");
  location.reload();
}

// klik luar modal = tutup
window.onclick = function(e) {
  const modal = document.getElementById("loginModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};



// ================== JACKPOT SYSTEM ==================
let value = 38000000000;
let isAnimating = false;

const jackpotEl = document.getElementById("jackpot");

function updateJackpot() {
 

  if (isAnimating) return;
  isAnimating = true;

  const increase = Math.floor(Math.random() * 500000) + 10000;
  value += increase;

  let display = parseInt(jackpotEl.innerText.replace(/\D/g, "")) || value;
  let step = Math.ceil((value - display) / 10);

  const interval = setInterval(() => {
    display += step;

    if (display >= value) {
      display = value;
      clearInterval(interval);
      isAnimating = false;
    }

    jackpotEl.innerText = "Rp " + display.toLocaleString("id-ID");

  }, 50);
}

// jalan tiap 1 detik
setInterval(updateJackpot, 1000);
