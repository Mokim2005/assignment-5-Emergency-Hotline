/* ---------- GLOBALS ---------- */
let totalHearts = 0;
let totalCoins = 100;
let totalCopies = 0;

const heartBtn = document.getElementById("total-heart");
const coinBtn = document.getElementById("total-coin")?.parentElement;
const productBox = document.getElementById("product-box");
const clearBtn = productBox.querySelector("button");
const copyCountSpan = document.getElementById("copy-count-total");

let historyList = productBox.querySelector("#history-list");
if (!historyList) {
  historyList = document.createElement("div");
  historyList.id = "history-list";
  historyList.className = "p-2";
  productBox.appendChild(historyList);
}

function updateCoinUI() {
  if (!coinBtn) return;
  const coinIcon = coinBtn.querySelector("i");
  if (coinIcon) {
    coinBtn.innerHTML = `${totalCoins} `;
    coinBtn.appendChild(coinIcon);
  } else {
    coinBtn.innerHTML = `${totalCoins} <i><img class="h-[30px]" src="./assets/coin.png" alt="" /></i>`;
  }
}

function updateHeartUI() {
  if (!heartBtn) return;
  const heartIcon = heartBtn.querySelector("i");
  if (heartIcon) {
    heartBtn.innerHTML = `${totalHearts} `;
    heartBtn.appendChild(heartIcon);
  } else {
    heartBtn.innerHTML = `${totalHearts} <i><img class="h-[30px]" src="./assets/heart.png" alt="" /></i>`;
  }
}

/* HEART CLICK */
document.querySelectorAll(".fa-heart").forEach((heart) => {
  heart.addEventListener("click", () => {
    totalHearts++;
    updateHeartUI();
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid", "text-red-500");

   
  });
});

/* CALL BUTTON */
document.querySelectorAll(".fa-phone").forEach((phoneIcon) => {
  const callBtn = phoneIcon.closest("button") || phoneIcon.parentElement;
  callBtn.addEventListener("click", (e) => {
    const card = e.target.closest("div.h-auto");
    if (!card) return;

    const h1s = Array.from(card.querySelectorAll("h1"))
      .map((h) => h.innerText.trim())
      .filter(Boolean);
    const serviceName = h1s[0] || "Service";
    let serviceNumber = h1s.length > 1 ? h1s[h1s.length - 1] : "";

    if (!serviceNumber) {
      const m = card.innerText.match(/\b\d{2,}\b/);
      serviceNumber = m ? m[0] : "N/A";
    }

    if (totalCoins < 20) {
      alert("Not enough coins! Please recharge to make a call.");
      return;
    }

    totalCoins -= 20;
    updateCoinUI();

    // Get local time
    const now = new Date();
    const localTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const historyItem = document.createElement("div");
    historyItem.className =
      "history-item flex justify-between items-center p-2 border-b bg-white";
    historyItem.innerHTML = `
          <span class="font-semibold">${serviceName}</span>
          <span class="text-gray-600">${serviceNumber}</span>
          <span class="text-gray-400 ml-2">${localTime}</span>
        `;
    historyList.appendChild(historyItem);
  });
});

/* COPY BUTTON */
document.querySelectorAll(".fa-copy").forEach((copyIcon) => {
  const copyBtn = copyIcon.closest("button");
  copyBtn.addEventListener("click", (e) => {
    const card = e.target.closest("div.h-auto");
    if (!card) return;

    const h1s = Array.from(card.querySelectorAll("h1"))
      .map((h) => h.innerText.trim())
      .filter(Boolean);
    let serviceNumber = h1s.length > 1 ? h1s[h1s.length - 1] : h1s[0] || "";

    if (!serviceNumber.match(/\d+/)) {
      const m = card.innerText.match(/\b\d{2,}\b/);
      serviceNumber = m ? m[0] : "";
    }

    if (!serviceNumber) return;

    navigator.clipboard.writeText(serviceNumber).then(() => {
      let currentCount = parseInt(copyCountSpan.innerText) || 0;
      currentCount++;
      copyCountSpan.innerText = currentCount;

      
    });
  });
});

/* CLEAR HISTORY */
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
  alert("History Cleared!");
});

/* INIT */
updateCoinUI();
updateHeartUI();
