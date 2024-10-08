document
  .getElementById("noakhali-donation-btn")
  .addEventListener("click", function () {
    const donation = getInputValueById("noakhali-donation-input");
    const totalDonation = getTextValueById("noakhali-donation");
    const balance = getTextValueById("current-balance");

    if (donation > 0 && !isNaN(donation)) {
      const finalDonation = totalDonation + donation;

      const currentBalance = balance - donation;

      document.getElementById("noakhali-donation").innerText = finalDonation;

      document.getElementById("current-balance").innerText = currentBalance;

      const historySection = document.getElementById("history-section");

      const historyItem = document.createElement("div");

      historyItem.className = "border-2 p-5 rounded-md my-2";
      historyItem.innerHTML = `
        <p>${donation} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>
        <p class="font-light text-gray-600">Date: ${new Date()}</p>
        `;

      historySection.insertBefore(historyItem, historySection.firstChild);
    }
  });
