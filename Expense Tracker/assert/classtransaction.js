class TransactionManager {
    constructor() {
      this.transactionForm = document.getElementById('transaction-form');
      this.transactionList = document.getElementById('transaction-list');
      this.totalIncome = document.getElementById('total-income');
      this.totalExpense = document.getElementById('total-expense');
      this.balance = document.getElementById('balance');
      this.filterCategorySelect = document.getElementById('filter-category');
      this.filterSubCategorySelect = document.getElementById('filter-sub-category');
      this.errorDateElement = document.getElementById('error-date');
      this.errorAmountElement = document.getElementById('error-amount');
      this.errorSummaryElement = document.getElementById('error-summary');
      this.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
      this.initialize();
    }
  
    initialize() {
      this.transactionForm.addEventListener('submit', (e) => this.addTransaction(e));
      this.filterCategorySelect.addEventListener('change', () => this.applyFilters());
      this.filterSubCategorySelect.addEventListener('change', () => this.applyFilters());
      document.addEventListener('DOMContentLoaded', () => {
        this.updateTransactionList();
        this.renderLineChart(this.transactions);
        this.updateSummary();
      });
    }
  
    saveTransactions() {
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }
  
    validateForm(date, amount, summary) {
      let isValid = true;
  
      if (date === '') {
        this.errorDateElement.textContent = 'Please enter a date';
        this.errorDateElement.style.color = 'red';
        isValid = false;
      } else {
        this.errorDateElement.textContent = '';
      }
  
      if (amount <= 0 || isNaN(amount)) {
        this.errorAmountElement.textContent = 'Please enter a valid amount';
        this.errorAmountElement.style.color = 'red';
        isValid = false;
      } else {
        this.errorAmountElement.textContent = '';
      }
  
      if (summary === '') {
        this.errorSummaryElement.textContent = 'Please enter a summary';
        this.errorSummaryElement.style.color = 'red';
        isValid = false;
      } else {
        this.errorSummaryElement.textContent = '';
      }
  
      return isValid;
    }
  
    addTransaction(event) {
      event.preventDefault();
      const date = document.getElementById('date').value;
      const amount = parseFloat(document.getElementById('amount').value);
      const category = document.getElementById('category').value;
      const summary = document.getElementById('summary').value;
      const subcategory = document.getElementById('sub-category').value;
  
      if (this.validateForm(date, amount, summary)) {
        const transaction = { date, amount, category, summary, subcategory };
        this.transactions.push(transaction);
        this.saveTransactions();
        this.updateTransactionList();
        this.updateSummary();
        this.transactionForm.reset();
      }
    }
  
    filterTransactions() {
      const filterCategory = this.filterCategorySelect.value.toLowerCase();
      const filterSubCategory = this.filterSubCategorySelect.value.toLowerCase();
      return this.transactions.filter((transaction) => {
        const matchesCategory = filterCategory === 'all' || transaction.category === filterCategory;
        const matchesSubCategory = filterSubCategory === 'all' || transaction.subcategory === filterSubCategory;
        return matchesCategory && matchesSubCategory;
      });
    }
  
    updateTransactionList() {
      const filteredTransactions = this.filterTransactions();
      const transactionListHTML = filteredTransactions.map((transaction) => `
        <tr>
          <td>${transaction.date}</td>
          <td>${transaction.amount}</td>
          <td>${transaction.category}</td>
          <td>${transaction.summary}</td>
          <td>${transaction.subcategory}</td>
        </tr>
      `).join('');
      this.transactionList.innerHTML = transactionListHTML;
    }
  
    updateSummary() {
      const totalIncomeAmount = this.transactions.reduce((acc, transaction) => 
        transaction.category === 'income' ? acc + transaction.amount : acc, 0);
      const totalExpenseAmount = this.transactions.reduce((acc, transaction) => 
        transaction.category === 'expense' ? acc + transaction.amount : acc, 0);
      const balanceAmount = totalIncomeAmount - totalExpenseAmount;
  
      this.totalIncome.textContent = totalIncomeAmount;
      this.totalExpense.textContent = totalExpenseAmount;
      this.balance.textContent = balanceAmount;
    }
  
    applyFilters() {
      this.updateTransactionList();
      this.renderLineChart(this.filterTransactions());
    }
  
    renderLineChart(filteredTransactions) {
      const container = document.getElementById('chart');
      container.innerHTML = '';
      const newChart = document.createElement('canvas');
      newChart.id = 'myChart';
      container.appendChild(newChart);
  
      const ctx = newChart.getContext('2d');
      const labels = filteredTransactions.map((transaction) => transaction.date);
      const data = filteredTransactions.map((transaction) => transaction.amount);
  
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Balance',
            data: data,
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
          }]
        }
      });
    }
  }

  const transactionManager = new TransactionManager();
  