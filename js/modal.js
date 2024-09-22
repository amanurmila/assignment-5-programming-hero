document.getElementById("noakhali-donation-btn").addEventListener("click", function(){
    const donation = getInputValueById("noakhali-donation-input");
    if(donation <= 0 || isNaN(donation)){
        alert("Invalid Input");
    }
    else{
        const modal = document.getElementById("my_modal_1");
        modal.showModal();
    }
})

document.getElementById("feni-donation-btn").addEventListener("click", function(){
    const donation = getInputValueById("feni-donation-input");
    if(donation <= 0 || isNaN(donation)){
        alert("Invalid Input");
    }
    else{
        const modal = document.getElementById("my_modal_1");
        modal.showModal();
    }
})

document.getElementById("quota-donation-btn").addEventListener("click", function(){
    const donation = getInputValueById("quota-donation-input");
    if(donation <= 0 || isNaN(donation)){
        alert("Invalid Input");
    }
    else{
        const modal = document.getElementById("my_modal_1");
        modal.showModal();
    }
})