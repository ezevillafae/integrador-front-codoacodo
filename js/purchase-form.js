const resumeBtn = document.getElementById("buy-ticket-btn");

resumeBtn.addEventListener("click", () => {
    const data = getPurchaseData();
    document.getElementById("purchase-form-total-value").innerText = data.total;
})

function getTotal(data) {
    const totalGross = data.ticketValue * data.amount;
    return discount(totalGross, data.category) ;
}

function discount(totalGross, category) {
    if(category === 'estudiante'){
        return totalGross - (totalGross * 0.80);
    }else if( category === 'trainee') {
        return totalGross - (totalGross * 0.50);
    }else{
        return totalGross - (totalGross * 0.15);
    }
}

function getPurchaseData() {
    const ticketValue = getTicketValue();
    const category = getCategory();
    const amount = getAmount();
    const total = getTotal({ticketValue,category, amount});

    return {
        ticketValue,
        category,
        amount,
        total
    }
}

function getTicketValue() {
    return parseInt(document.getElementById("ticket-value").innerText);
}

function getCategory() {
    return document.getElementById("purchase-form-option-category").value;
}

function getAmount() {
    return parseInt(document.getElementById("purchase-form-amount").value);
}