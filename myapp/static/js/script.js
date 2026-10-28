/**
 * MediStore Pro - Master JavaScript Logic
 * Handles Sidebar Collapse, Mobile Offcanvas, Theme Dark/Light Mode,
 * Live Search Filters, and Toast Notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initTheme();
  initFullscreen();
  initTableSearchFilter();
  initBootstrapComponents();
});

/* --------------------------------------------------------------------------
   1. Sidebar & Mobile Offcanvas Drawer Handler
   -------------------------------------------------------------------------- */
function initSidebar() {
  const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
  const appWrapper = document.querySelector('.app-wrapper');
  
  // Restore mini-sidebar state from localStorage
  const isMini = localStorage.getItem('medistore_mini_sidebar') === 'true';
  if (isMini && appWrapper) {
    appWrapper.classList.add('mini-sidebar');
  }

  if (sidebarToggleBtn && appWrapper) {
    sidebarToggleBtn.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        appWrapper.classList.toggle('mobile-open');
      } else {
        appWrapper.classList.toggle('mini-sidebar');
        localStorage.setItem('medistore_mini_sidebar', appWrapper.classList.contains('mini-sidebar'));
      }
    });
  }

  // Close mobile sidebar on backdrop click
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 992 && appWrapper && appWrapper.classList.contains('mobile-open')) {
      const sidebar = document.querySelector('.app-sidebar');
      if (sidebar && !sidebar.contains(e.target) && sidebarToggleBtn && !sidebarToggleBtn.contains(e.target)) {
        appWrapper.classList.remove('mobile-open');
      }
    }
  });
}

/* --------------------------------------------------------------------------
   2. Theme & Dark Mode Handler
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('medistore_theme') || 'light';
  
  applyTheme(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('medistore_theme', newTheme);
      showToast('Theme Changed', `Switched to ${newTheme} mode`, 'info');
    });
  }
}

function applyTheme(theme) {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.body.classList.add('dark-mode');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun text-warning"></i>';
    }
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.body.classList.remove('dark-mode');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }
}

/* --------------------------------------------------------------------------
   3. Fullscreen Toggle Handler
   -------------------------------------------------------------------------- */
function initFullscreen() {
  const btn = document.getElementById('fullscreen-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.error(err));
      btn.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        btn.innerHTML = '<i class="fa-solid fa-expand"></i>';
      }
    }
  });
}

/* --------------------------------------------------------------------------
   4. Table Search & Filtering Helper
   -------------------------------------------------------------------------- */
function initTableSearchFilter() {
  const tableSearchInput = document.getElementById('table-search-input');
  if (!tableSearchInput) return;

  tableSearchInput.addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const targetTable = document.querySelector('.table-saas tbody');
    if (!targetTable) return;

    const rows = targetTable.querySelectorAll('tr');
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      if (text.indexOf(filter) > -1) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Toast Notification System
   -------------------------------------------------------------------------- */
function showToast(title, message, type = 'primary') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    toastContainer.style.zIndex = '9999';
    document.body.appendChild(toastContainer);
  }

  const bgClass = type === 'success' ? 'bg-success' :
                  type === 'danger' ? 'bg-danger' :
                  type === 'warning' ? 'bg-warning' : 'bg-primary';

  const toastId = 'toast-' + Date.now();
  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center text-white ${bgClass} border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          <strong>${title}</strong><br>
          <small>${message}</small>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  toastContainer.insertAdjacentHTML('beforeend', toastHtml);
  const toastElement = document.getElementById(toastId);
  const bsToast = new bootstrap.Toast(toastElement, { delay: 3500 });
  bsToast.show();

  toastElement.addEventListener('hidden.bs.toast', () => {
    toastElement.remove();
  });
}

/* --------------------------------------------------------------------------
   6. Bootstrap Component Initializer
   -------------------------------------------------------------------------- */
function initBootstrapComponents() {
  const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltips.forEach(t => new bootstrap.Tooltip(t));
}
