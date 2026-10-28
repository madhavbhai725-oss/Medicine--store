/**
 * MediStore Pro - Chart.js Initializer
 * Beautiful, responsive, theme-aware analytics charts.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global Chart.js Defaults for Modern SaaS feel
  if (typeof Chart !== 'undefined') {
    Chart.defaults.font.family = "'Poppins', sans-serif";
    Chart.defaults.color = '#64748B';
    
    initDashboardCharts();
    initStockCharts();
    initReportsCharts();
  }
});

/* --------------------------------------------------------------------------
   1. Dashboard Charts
   -------------------------------------------------------------------------- */
function initDashboardCharts() {
  // Monthly Revenue Area Chart
  const revenueCtx = document.getElementById('monthlyRevenueChart');
  if (revenueCtx) {
    const gradient = revenueCtx.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(37, 99, 235, 0.35)');
    gradient.addColorStop(1, 'rgba(37, 99, 235, 0.0)');

    new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Revenue (₹)',
          data: [142000, 185000, 210000, 195000, 248000, 289000, 310000, 345000, 320000, 380000, 420000, 485000],
          borderColor: '#2563EB',
          borderWidth: 3,
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#2563EB',
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            grid: { color: 'rgba(226, 232, 240, 0.5)' },
            ticks: {
              callback: value => '₹' + (value / 1000) + 'k'
            }
          }
        }
      }
    });
  }

  // Monthly Sales vs Expenses Grouped Bar Chart
  const salesExpCtx = document.getElementById('salesExpensesChart');
  if (salesExpCtx) {
    new Chart(salesExpCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'Sales (₹)',
            data: [120000, 160000, 190000, 175000, 220000, 260000, 290000, 310000],
            backgroundColor: '#10B981',
            borderRadius: 8
          },
          {
            label: 'Expenses (₹)',
            data: [75000, 95000, 110000, 105000, 130000, 140000, 160000, 170000],
            backgroundColor: '#EF4444',
            borderRadius: 8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' }
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: 'rgba(226, 232, 240, 0.5)' } }
        }
      }
    });
  }

  // Weekly Orders Distribution Donut
  const ordersCtx = document.getElementById('ordersDonutChart');
  if (ordersCtx) {
    new Chart(ordersCtx, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Pending', 'Processing', 'Cancelled'],
        datasets: [{
          data: [420, 85, 60, 25],
          backgroundColor: ['#10B981', '#F59E0B', '#2563EB', '#EF4444'],
          borderWidth: 0,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        },
        cutout: '72%'
      }
    });
  }

  // Top Categories Radar Chart
  const categoryCtx = document.getElementById('topCategoriesChart');
  if (categoryCtx) {
    new Chart(categoryCtx, {
      type: 'polarArea',
      data: {
        labels: ['Tablets', 'Capsules', 'Syrups', 'Injections', 'Equipment', 'Cream/Gel'],
        datasets: [{
          data: [85, 65, 45, 30, 25, 40],
          backgroundColor: [
            'rgba(37, 99, 235, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(245, 158, 11, 0.7)',
            'rgba(239, 68, 68, 0.7)',
            'rgba(139, 92, 246, 0.7)',
            'rgba(6, 182, 212, 0.7)'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }
}

/* --------------------------------------------------------------------------
   2. Stock Page Charts
   -------------------------------------------------------------------------- */
function initStockCharts() {
  const stockCtx = document.getElementById('stockOverviewChart');
  if (stockCtx) {
    new Chart(stockCtx, {
      type: 'bar',
      data: {
        labels: ['In Stock', 'Low Stock', 'Out of Stock', 'Expired'],
        datasets: [{
          label: 'Total Items Count',
          data: [1450, 48, 12, 18],
          backgroundColor: ['#10B981', '#F59E0B', '#EF4444', '#64748B'],
          borderRadius: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: 'rgba(226, 232, 240, 0.5)' } }
        }
      }
    });
  }
}

/* --------------------------------------------------------------------------
   3. Reports Page Charts
   -------------------------------------------------------------------------- */
function initReportsCharts() {
  const reportProfitCtx = document.getElementById('reportProfitChart');
  if (reportProfitCtx) {
    new Chart(reportProfitCtx, {
      type: 'line',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Net Profit (₹)',
            data: [280000, 390000, 450000, 520000],
            borderColor: '#10B981',
            borderWidth: 3,
            fill: false,
            tension: 0.3
          },
          {
            label: 'Gross Profit (₹)',
            data: [420000, 580000, 680000, 790000],
            borderColor: '#2563EB',
            borderWidth: 3,
            fill: false,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } }
      }
    });
  }
}
