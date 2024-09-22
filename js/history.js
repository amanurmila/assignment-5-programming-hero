const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
const mainSection = document.getElementById("main-section");
const historySection = document.getElementById("history-section");



document.getElementById("history-btn").addEventListener("click", function() {
    historyBtn.classList.remove('btn-outline', 'bg-white')
    historyBtn.classList.add('bg-[#B4F461]');

    donationBtn.classList.add('btn-outline', 'bg-white');
    donationBtn.classList.remove('bg-[#B4F461]');

    mainSection.classList.add("hidden");
    historySection.classList.remove("hidden");
})


document.getElementById("donation-btn").addEventListener("click", function() {
    donationBtn.classList.remove('btn-outline', 'bg-white')
    donationBtn.classList.add('bg-[#B4F461]');

    historyBtn.classList.add('btn-outline', 'bg-white');
    historyBtn.classList.remove('bg-[#B4F461]');

    historySection.classList.add("hidden");
    mainSection.classList.remove("hidden");
})