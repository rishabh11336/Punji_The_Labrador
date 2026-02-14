// ===================================
// PRODUCT DATA
// Replace with your actual Amazon affiliate products
// ===================================
const products = [
    {
        id: 1,
        name: "Interactive Puzzle Toy",
        category: "toys",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.8,
        reviews: 1243,
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
        description: "Keep your dog mentally stimulated with this challenging puzzle toy. Perfect for reducing boredom and anxiety.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: "Top Rated"
    },
    {
        id: 2,
        name: "Premium Dog Treats - Chicken",
        category: "treats",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.9,
        reviews: 2847,
        image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?w=600&h=400&fit=crop",
        description: "100% natural chicken treats. No artificial flavors or preservatives. Perfect for training and rewards.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: "Best Seller"
    },
    {
        id: 3,
        name: "Stainless Steel Dog Bowl Set",
        category: "bowls",
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.7,
        reviews: 892,
        image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&h=400&fit=crop",
        description: "Durable stainless steel bowls with non-slip base. Dishwasher safe and rust-resistant.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: "Premium"
    },
    {
        id: 4,
        name: "Rope Tug Toy",
        category: "toys",
        price: 14.99,
        originalPrice: 19.99,
        rating: 4.6,
        reviews: 1567,
        image: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=600&h=400&fit=crop",
        description: "Heavy-duty rope toy for interactive play. Great for tug-of-war and dental health.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: null
    },
    {
        id: 5,
        name: "Orthopedic Dog Bed",
        category: "accessories",
        price: 59.99,
        originalPrice: 89.99,
        rating: 4.9,
        reviews: 3421,
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=400&fit=crop",
        description: "Memory foam dog bed with removable, washable cover. Perfect for older dogs or those with joint issues.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: "Top Rated"
    },
    {
        id: 6,
        name: "Salmon Training Treats",
        category: "treats",
        price: 19.99,
        originalPrice: 26.99,
        rating: 4.8,
        reviews: 1923,
        image: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=600&h=400&fit=crop",
        description: "Grain-free salmon treats packed with Omega-3. Small size perfect for training sessions.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: null
    },
    {
        id: 7,
        name: "Adjustable Dog Collar",
        category: "accessories",
        price: 18.99,
        originalPrice: 24.99,
        rating: 4.7,
        reviews: 2156,
        image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=600&h=400&fit=crop",
        description: "Durable nylon collar with reflective stitching. Adjustable fit for all sizes.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: null
    },
    {
        id: 8,
        name: "Automatic Water Fountain",
        category: "bowls",
        price: 44.99,
        originalPrice: 59.99,
        rating: 4.6,
        reviews: 1034,
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
        description: "Keep your dog hydrated with fresh, filtered water. Quiet pump and large capacity.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: "Premium"
    },
    {
        id: 9,
        name: "Squeaky Plush Toys (3-Pack)",
        category: "toys",
        price: 22.99,
        originalPrice: 32.99,
        rating: 4.5,
        reviews: 892,
        image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?w=600&h=400&fit=crop",
        description: "Set of 3 adorable plush toys with squeakers. Perfect for gentle play and cuddling.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: null
    },
    {
        id: 10,
        name: "Dental Chew Treats",
        category: "treats",
        price: 27.99,
        originalPrice: 36.99,
        rating: 4.8,
        reviews: 2341,
        image: "https://images.unsplash.com/photo-1622228930688-dc948345efb5?w=600&h=400&fit=crop",
        description: "Veterinarian recommended dental treats. Helps reduce tartar and freshen breath.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: "Vet Approved"
    },
    {
        id: 11,
        name: "Grooming Brush Set",
        category: "accessories",
        price: 16.99,
        originalPrice: 24.99,
        rating: 4.7,
        reviews: 1456,
        image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=400&fit=crop",
        description: "Professional grooming brushes for all coat types. Reduces shedding and keeps fur healthy.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: null
    },
    {
        id: 12,
        name: "Elevated Feeder Stand",
        category: "bowls",
        price: 39.99,
        originalPrice: 54.99,
        rating: 4.6,
        reviews: 743,
        image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=600&h=400&fit=crop",
        description: "Raised feeding station for better digestion. Adjustable height for growing dogs.",
        affiliateLink: "YOUR_AMAZON_AFFILIATE_LINK_HERE",
        badge: null
    }
];

// ===================================
// STATE MANAGEMENT
// ===================================
let currentCategory = 'all';
let currentSort = 'featured';
let searchQuery = '';
let filteredProducts = [...products];

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
    renderProducts();
    observeCards();

    console.log('%c🐕 Punji\'s Premium Dog Products', 'font-size: 24px; font-weight: bold; color: #ff6b35;');
    console.log('%cLoaded ' + products.length + ' products', 'font-size: 14px; color: #4ecdc4;');
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
