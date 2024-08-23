console.log('Hello, World!');

function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const age = parseInt(document.getElementById('age').value);
    const deductions80C = parseFloat(document.getElementById('deductions80C').value);
    const deductions24b = parseFloat(document.getElementById('deductions24b').value);
    const deductionsHRA = parseFloat(document.getElementById('deductionsHRA').value);

    if (isNaN(income) || isNaN(age) || income <= 0 || age < 0 || isNaN(deductions80C) || isNaN(deductions24b) || isNaN(deductionsHRA)) {
        alert('Please enter valid income, age, and deduction values.');
        return;
    }

    // Maximum deduction limits (FY 2024-25)
    const maxDeduction80C = 150000;
    const maxDeduction24b = 200000;
    
    // Calculate total deductions
    let totalDeductions = Math.min(deductions80C, maxDeduction80C) + Math.min(deductions24b, maxDeduction24b) + deductionsHRA;

    // Apply deductions to income
    let taxableIncome = Math.max(income - totalDeductions, 0);
    let tax = 0;

    // Tax Slabs for FY 2024-25
    if (age < 60) {
        if (taxableIncome <= 250000) {
            tax = 0;
        } else if (taxableIncome <= 500000) {
            tax = (taxableIncome - 250000) * 0.05;
        } else if (taxableIncome <= 750000) {
            tax = (taxableIncome - 500000) * 0.1 + 12500;
        } else if (taxableIncome <= 1000000) {
            tax = (taxableIncome - 750000) * 0.15 + 37500;
        } else if (taxableIncome <= 1250000) {
            tax = (taxableIncome - 1000000) * 0.2 + 75000;
        } else if (taxableIncome <= 1500000) {
            tax = (taxableIncome - 1250000) * 0.25 + 125000;
        } else {
            tax = (taxableIncome - 1500000) * 0.3 + 187500;
        }
    } else if (age >= 60 && age < 80) {
        if (taxableIncome <= 300000) {
            tax = 0;
        } else if (taxableIncome <= 500000) {
            tax = (taxableIncome - 300000) * 0.05;
        } else if (taxableIncome <= 750000) {
            tax = (taxableIncome - 500000) * 0.1 + 10000;
        } else if (taxableIncome <= 1000000) {
            tax = (taxableIncome - 750000) * 0.15 + 35000;
        } else if (taxableIncome <= 1250000) {
            tax = (taxableIncome - 1000000) * 0.2 + 85000;
        } else if (taxableIncome <= 1500000) {
            tax = (taxableIncome - 1250000) * 0.25 + 150000;
        } else {
            tax = (taxableIncome - 1500000) * 0.3 + 212500;
        }
    } else {
        if (taxableIncome <= 500000) {
            tax = 0;
        } else if (taxableIncome <= 750000) {
            tax = (taxableIncome - 500000) * 0.1;
        } else if (taxableIncome <= 1000000) {
            tax = (taxableIncome - 750000) * 0.15 + 25000;
        } else if (taxableIncome <= 1250000) {
            tax = (taxableIncome - 1000000) * 0.2 + 50000;
        } else if (taxableIncome <= 1500000) {
            tax = (taxableIncome - 1250000) * 0.25 + 100000;
        } else {
            tax = (taxableIncome - 1500000) * 0.3 + 162500;
        }
    }

    document.getElementById('tax-output').innerText = `Your tax liability after deductions is ₹${tax.toFixed(2)}`;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateTax();
    }
});