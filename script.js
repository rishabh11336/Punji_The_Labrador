// ===================================
// GITHUB DATA CONFIGURATION
// ===================================
const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/rishabh11336/Punji_The_Labrador_Images-JSON/main/products.json';

// ===================================
// PRODUCT DATA
// Will be loaded from GitHub
// ===================================
let products = [];

// ===================================
// STATE MANAGEMENT
// ===================================
let currentCategory = 'all';
let currentSort = 'featured';
let searchQuery = '';
let filteredProducts = [];
let isLoading = true;

// ===================================
// DOM ELEMENTS
// ===================================
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortSelect');
const noResults = document.getElementById('noResults');
const backToTop = document.getElementById('backToTop');
const navbar = document.getElementById('navbar');
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const retryBtn = document.getElementById('retryBtn');

// ===================================
// FETCH PRODUCTS FROM GITHUB
// ===================================
async function fetchProducts() {
    try {
        isLoading = true;
        showLoadingState();

        const response = await fetch(GITHUB_RAW_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        products = data.products || [];

        // Add missing fields and IDs to maintain compatibility
        products = products.map((product, index) => ({
            id: index + 1,
            originalPrice: product.originalPrice || null,
            badge: product.badge || null,
            reviews: product.reviews || 0,
            ...product
        }));

        isLoading = false;
        hideLoadingState();
        filteredProducts = [...products];
        filterProducts();

        console.log(`%c🐕 Loaded ${products.length} products from GitHub!`, 'font-size: 16px; font-weight: bold; color: #4ecdc4;');

    } catch (error) {
        console.error('Error loading products:', error);
        isLoading = false;
        showErrorState();
    }
}

// ===================================
// UI STATE MANAGEMENT
// ===================================
function showLoadingState() {
    loadingState.style.display = 'block';
    errorState.style.display = 'none';
    productsGrid.style.display = 'none';
    noResults.style.display = 'none';
}

function hideLoadingState() {
    loadingState.style.display = 'none';
    productsGrid.style.display = 'grid';
}

function showErrorState() {
    loadingState.style.display = 'none';
    errorState.style.display = 'block';
    productsGrid.style.display = 'none';
    noResults.style.display = 'none';
}

// Retry button handler
if (retryBtn) {
    retryBtn.addEventListener('click', () => {
        fetchProducts();
    });
}


// ===================================
// RENDER PRODUCTS
// ===================================
function renderProducts() {
    productsGrid.innerHTML = '';

    if (filteredProducts.length === 0) {
        noResults.style.display = 'block';
        productsGrid.style.display = 'none';
        return;
    }

    noResults.style.display = 'none';
    productsGrid.style.display = 'grid';

    filteredProducts.forEach((product, index) => {
        const card = createProductCard(product, index);
        productsGrid.appendChild(card);
    });
}

// ===================================
// CREATE PRODUCT CARD
// ===================================
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    card.innerHTML = `
        <div class="product-image-container">
            <img 
                src="${product.image}" 
                alt="${product.name}"
                class="product-image"
                loading="lazy"
            >
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-favorite" title="Add to favorites">❤</div>
        </div>
        
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.name}</h3>
            
            <div class="product-rating">
                <span class="stars" aria-label="${product.rating} stars">${stars}</span>
                <span class="rating-count">(${product.reviews.toLocaleString()})</span>
            </div>
            
            <p class="product-description">${product.description}</p>
            
            <div class="product-footer">
                <div class="product-price">
                    <div class="price-current">$${product.price}</div>
                    ${product.originalPrice ? `<div class="price-original">$${product.originalPrice}</div>` : ''}
                </div>
                <a 
                    href="${product.affiliateLink}" 
                    class="buy-btn"
                    target="_blank"
                    rel="nofollow sponsored"
                    aria-label="Buy ${product.name} on Amazon"
                >
                    Buy Now
                </a>
            </div>
        </div>
    `;

    return card;
}

// ===================================
// FILTER PRODUCTS
// ===================================
function filterProducts() {
    filteredProducts = products.filter(product => {
        // Category filter
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;

        // Search filter
        const matchesSearch = !searchQuery ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    sortProducts();
    renderProducts();
}

// ===================================
// SORT PRODUCTS
// ===================================
function sortProducts() {
    switch (currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'featured':
        default:
            filteredProducts.sort((a, b) => a.id - b.id);
            break;
    }
}

// ===================================
// EVENT LISTENERS
// ===================================

// Search
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    filterProducts();
});

// Category Filters
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update category
        currentCategory = btn.dataset.category;
        filterProducts();
    });
});

// Sort
sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    sortProducts();
    renderProducts();
});

// Back to Top Button
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show/hide back to top button
    if (scrollTop > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

    // Add scrolled class to navbar
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// SCROLL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards
function observeCards() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => observer.observe(card));
}

// ===================================
// FAVORITES FUNCTIONALITY
// ===================================
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('product-favorite')) {
        e.target.classList.toggle('active');

        // Optional: Save to localStorage
        const productCard = e.target.closest('.product-card');
        const productTitle = productCard.querySelector('.product-title').textContent;

        if (e.target.classList.contains('active')) {
            e.target.textContent = '💖';
            console.log(`Added "${productTitle}" to favorites`);
        } else {
            e.target.textContent = '❤';
            console.log(`Removed "${productTitle}" from favorites`);
        }
    }
});

// ===================================
// KEYBOARD NAVIGATION
// ===================================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }

    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchQuery = '';
        filterProducts();
        searchInput.blur();
    }
});

// ===================================
// PERFORMANCE: DEBOUNCE SEARCH
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search (300ms delay)
const debouncedSearch = debounce((value) => {
    searchQuery = value.trim();
    filterProducts();
}, 300);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});

// ===================================
// INITIALIZE
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Fetch products from GitHub
    fetchProducts();

    console.log('%c🐕 Punji\'s Premium Dog Products', 'font-size: 24px; font-weight: bold; color: #ff6b35;');
    console.log('%cPress Ctrl/Cmd + K to search', 'font-size: 12px; color: #b8bfd8;');
});

// ===================================
// ANALYTICS (Optional)
// ===================================
function trackAffiliateClick(productName, affiliateLink) {
    // Add your analytics tracking here
    console.log(`Affiliate click: ${productName}`);
    // Example: gtag('event', 'affiliate_click', { product: productName });
}

// Track all affiliate link clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-btn')) {
        const productCard = e.target.closest('.product-card');
        const productTitle = productCard.querySelector('.product-title').textContent;
        trackAffiliateClick(productTitle, e.target.href);
    }
});

// ===================================
// ERROR HANDLING
// ===================================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.message);
});

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
