document
  .getElementById("feni-donation-btn")
  .addEventListener("click", function () {
    const donation = getInputValueById("feni-donation-input");
    const totalDonation = getTextValueById("feni-donation");
    const balance = getTextValueById("current-balance");

    if (donation > 0 && !isNaN(donation)) {
      const finalDonation = totalDonation + donation;

      const currentBalance = balance - donation;

      document.getElementById("feni-donation").innerText = finalDonation;

      document.getElementById("current-balance").innerText = currentBalance;

      const historySection = document.getElementById("history-section");

      const historyItem = document.createElement("div");

      historyItem.className = "border-2 p-5 rounded-md my-2";
      historyItem.innerHTML = `
    <p>${donation} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh</p>
    <p>Date: ${new Date()}</p>
    `;

      historySection.insertBefore(historyItem, historySection.firstChild);
    }
  });
