document.getElementById("quota-donation-btn").addEventListener("click", function(){
    const donation = getInputValueById("quota-donation-input");
    const totalDonation = getTextValueById("quota-donation");
    const balance = getTextValueById("current-balance");

    const finalDonation  = totalDonation + donation;

    const currentBalance = balance - donation;

    document.getElementById("quota-donation").innerText = finalDonation;

    document.getElementById("current-balance").innerText = currentBalance;


    const historySection = document.getElementById("history-section");
    
    const historyItem = document.createElement("div");

    historyItem.className = 'border-2 p-5 rounded-md my-2'
    historyItem.innerHTML = `
    <p>${donation} Taka is Donated for Aid for Injured in the Quota Movement</p>
    <p>Date: ${new Date()}</p>
    `;

    historySection.insertBefore(historyItem, historySection.firstChild);
})