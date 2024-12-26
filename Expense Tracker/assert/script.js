const transactionForm = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');
const totalIncome = document.getElementById('total-income');
const totalExpense = document.getElementById('total-expense');
const balance = document.getElementById('balance');
const filterCategorySelect = document.getElementById('filter-category');
const filterSubCategorySelect = document.getElementById('filter-sub-category');
const errorDateElement = document.getElementById('error-date');
const errorAmountElement = document.getElementById('error-amount');
const errorSummaryElement = document.getElementById('error-summary');
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function saveTransactions() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function validateForm(date, amount, summary) {
  let isValid = true;
  if (date === '') {
    errorDateElement.textContent = 'Please enter a date';
    errorDateElement.style.color = 'red';
    isValid = false;
  } else {
    errorDateElement.textContent = '';
  }
  if (amount <= 0 || isNaN(amount)) {
    errorAmountElement.textContent = 'Please enter a valid amount';
    errorAmountElement.style.color = 'red';
    isValid = false;
  } else {
    errorAmountElement.textContent = '';
  }
  if (summary === '') {
    errorSummaryElement.textContent = 'Please enter a summary';
    errorSummaryElement.style.color = 'red';
    isValid = false;
  } else {
    errorSummaryElement.textContent = '';
  }
  return isValid;
}
transactionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const date = document.getElementById('date').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const summary = document.getElementById('summary').value;
  const subcategory = document.getElementById('sub-category').value;

  if (validateForm(date, amount, summary)) {
    const transaction = { date, amount, category, summary, subcategory };
    //console.log(transaction);
    transactions.push(transaction);
    saveTransactions();
    updateTransactionList();
    updateSummary();
    transactionForm.reset();
  }
});

function updateTransactionList() {
  const filteredTransactions = filterTransactions();
  const transactionListHTML = filteredTransactions.map((transaction) => `
    <tr>
      <td>${transaction.date}</td>
      <td>${transaction.amount}</td>
      <td>${transaction.category}</td>
      <td>${transaction.summary}</td>
      <td>${transaction.subcategory}</td>
    </tr>
  `).join('');
  transactionList.innerHTML = transactionListHTML;
}
function filterTransactions() {
  const filterCategory = filterCategorySelect.value.toLowerCase();
  const filterSubCategory = filterSubCategorySelect.value.toLowerCase();
  return transactions.filter((transaction) => {
    const matchesCategory = filterCategory === 'all' || transaction.category === filterCategory;
    const matchesSubCategory = filterSubCategory === 'all' || transaction.subcategory === filterSubCategory;
    return matchesCategory && matchesSubCategory;
  });
}
function updateSummary() {
  const totalIncomeAmount = transactions.reduce((account, transaction) => {
    if (transaction.category === 'income') {
      //console.log(account);
      return account + transaction.amount;
    } else {
      return account;
    }
  }, 0);
  const totalExpenseAmount = transactions.reduce((account, transaction) => {
    if (transaction.category === 'expense') {
      return account + transaction.amount;
    } else {
      return account;
    }
  }, 0);
  const balanceAmount = totalIncomeAmount - totalExpenseAmount;
  totalIncome.textContent = totalIncomeAmount;
  totalExpense.textContent = totalExpenseAmount;
  balance.textContent = balanceAmount;
}
function applyFilters() {
  updateTransactionList();
  // console.log(filterTransactions());
  linechart(filterTransactions());
}
filterCategorySelect.addEventListener('change', applyFilters);
filterSubCategorySelect.addEventListener('change', applyFilters);
document.addEventListener('DOMContentLoaded', () => {
  updateTransactionList();
  linechart(transactions);
  updateSummary();
});

// line chart
function linechart(value) {
  let container = document.getElementById('chart');
  container.innerHTML = "";
  const newchart = document.createElement('canvas');
  newchart.id='myChart';
  container.appendChild(newchart);
  let charttext = document.getElementById('myChart').getContext('2d');
  let labels = value.map(getDate);
  let datasetsData = value.map(getAmount);
  function getDate(item) {
    return item.date;
  }
  function getAmount(item) {
    return item.amount;
  }
  let myChart = new Chart(charttext, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Balance',
        data: datasetsData,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }]
    },
  });
 // console.log(myChart);
}