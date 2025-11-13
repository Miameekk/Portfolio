// DOM Elements
        const themeToggle = document.getElementById('themeToggle');
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const userActions = document.getElementById('userActions');
        const userMenu = document.getElementById('userMenu');
        const userAvatar = document.getElementById('userAvatar');
        const userDropdown = document.getElementById('userDropdown');
        const dashboardBtn = document.getElementById('dashboardBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const wishlistBtnNav = document.getElementById('wishlistBtnNav');
        const wishlistCount = document.getElementById('wishlistCount');
        const cartBtn = document.getElementById('cartBtn');
        const cartCount = document.getElementById('cartCount');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const authModal = document.getElementById('authModal');
        const authModalTitle = document.getElementById('authModalTitle');
        const closeAuthModal = document.getElementById('closeAuthModal');
        const authTabs = document.querySelectorAll('.auth-tab');
        const authForms = document.querySelectorAll('.auth-form');
        const switchToLogin = document.getElementById('switchToLogin');
        const switchToRegister = document.getElementById('switchToRegister');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const dashboardModal = document.getElementById('dashboardModal');
        const closeDashboardModal = document.getElementById('closeDashboardModal');
        const dashboardUsername = document.getElementById('dashboardUsername');
        const quickViewModal = document.getElementById('quickViewModal');
        const closeQuickView = document.getElementById('closeQuickView');
        const quickViewTitle = document.getElementById('quickViewTitle');
        const quickViewImage = document.getElementById('quickViewImage');
        const quickViewPrice = document.getElementById('quickViewPrice');
        const quickViewDescription = document.getElementById('quickViewDescription');
        const quickViewTags = document.getElementById('quickViewTags');
        const quickViewAddToCart = document.getElementById('quickViewAddToCart');
        const quickViewWishlist = document.getElementById('quickViewWishlist');
        const cartModal = document.getElementById('cartModal');
        const closeCartModal = document.getElementById('closeCartModal');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const clearCart = document.getElementById('clearCart');
        const wishlistModal = document.getElementById('wishlistModal');
        const closeWishlistModal = document.getElementById('closeWishlistModal');
        const wishlistItems = document.getElementById('wishlistItems');
        const searchInput = document.getElementById('searchInput');
        const sortSelect = document.getElementById('sortSelect');
        const productsGrid = document.getElementById('productsGrid');
        const viewButtons = document.querySelectorAll('.view-btn');
        const kbSearch = document.getElementById('kbSearch');
        const kbCategories = document.querySelectorAll('.kb-category');
        const kbGrid = document.getElementById('kbGrid');
        const faqSearch = document.getElementById('faqSearch');
        const faqList = document.getElementById('faqList');
        const reviewSort = document.getElementById('reviewSort');
        const reviewsGrid = document.getElementById('reviewsGrid');
        const ticketForm = document.getElementById('ticketForm');
        const toast = document.getElementById('toast');
        const currentYear = document.getElementById('currentYear');

        // Sample Data
        const products = [
            {
                id: 1,
                name: "Network Scanner Pro",
                description: "Advanced network scanning tool with vulnerability detection",
                price: 149.99,
                tags: ["Windows", "Linux", "Network"],
                badge: "Stable",
                image: "🔍",
                popularity: 95
            },
            {
                id: 2,
                name: "Password Cracker Suite",
                description: "Comprehensive password recovery and testing toolkit",
                price: 199.99,
                tags: ["Windows", "Linux", "Security"],
                badge: "Beta",
                image: "🔑",
                popularity: 87
            },
            {
                id: 3,
                name: "Web App Pentest Tool",
                description: "Automated web application penetration testing framework",
                price: 249.99,
                tags: ["Cross-Platform", "Web", "Security"],
                badge: "Stable",
                image: "🌐",
                popularity: 92
            },
            {
                id: 4,
                name: "SOC Analytics Dashboard",
                description: "Real-time security operations center monitoring dashboard",
                price: 349.99,
                tags: ["Web", "Dashboard", "Monitoring"],
                badge: "Stable",
                image: "📊",
                popularity: 78
            },
            {
                id: 5,
                name: "Incident Response Bot",
                description: "AI-powered incident response and automation system",
                price: 299.99,
                tags: ["Linux", "Automation", "AI"],
                badge: "Beta",
                image: "🤖",
                popularity: 84
            },
            {
                id: 6,
                name: "Encryption Toolkit",
                description: "Comprehensive encryption and decryption utilities",
                price: 179.99,
                tags: ["Cross-Platform", "Crypto", "Security"],
                badge: "Stable",
                image: "🔒",
                popularity: 90
            }
        ];

        const articles = [
            {
                id: 1,
                title: "Getting Started with Network Security",
                excerpt: "Learn the basics of network security and how to protect your infrastructure from common threats.",
                category: "tutorials",
                date: "Dec 10, 2023",
                image: "🌐"
            },
            {
                id: 2,
                title: "Advanced Penetration Testing Techniques",
                excerpt: "Discover advanced techniques used by professional penetration testers to identify vulnerabilities.",
                category: "guides",
                date: "Dec 5, 2023",
                image: "🔓"
            },
            {
                id: 3,
                title: "New Security Threats in 2024",
                excerpt: "Stay informed about the latest security threats and how to defend against them.",
                category: "news",
                date: "Dec 1, 2023",
                image: "⚠️"
            },
            {
                id: 4,
                title: "Building Your Own Security Tools",
                excerpt: "A guide to creating custom security tools tailored to your specific needs.",
                category: "tutorials",
                date: "Nov 28, 2023",
                image: "🛠️"
            },
            {
                id: 5,
                title: "Red Team Operations Best Practices",
                excerpt: "Learn how to conduct effective red team operations with these best practices.",
                category: "guides",
                date: "Nov 25, 2023",
                image: "🔴"
            },
            {
                id: 6,
                title: "Comparing Security Tools: 2024 Edition",
                excerpt: "A comprehensive comparison of the top security tools available in 2024.",
                category: "tools",
                date: "Nov 20, 2023",
                image: "📋"
            }
        ];

        const faqs = [
            {
                question: "How do I install HexVane tools?",
                answer: "Each tool comes with detailed installation instructions. Generally, you can download the package from your dashboard and follow the setup guide provided."
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and cryptocurrency payments for your convenience."
            },
            {
                question: "Can I request a custom tool?",
                answer: "Yes, we offer custom development services. Please contact our sales team to discuss your requirements."
            },
            {
                question: "How often are tools updated?",
                answer: "We regularly update our tools to address new threats and improve functionality. Pro and Enterprise subscribers receive automatic updates."
            },
            {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for our Pro plan. No credit card is required to start the trial."
            },
            {
                question: "What support is included with the Free plan?",
                answer: "The Free plan includes community support through our forums. Priority support is available for paid plans."
            }
        ];

        const reviews = [
            {
                id: 1,
                name: "Alex Johnson",
                role: "Security Analyst",
                rating: 5,
                content: "HexVane tools have transformed our security operations. The network scanner helped us identify vulnerabilities we didn't even know existed.",
                date: "Dec 12, 2023"
            },
            {
                id: 2,
                name: "Sarah Williams",
                role: "IT Manager",
                rating: 4,
                content: "Great tools overall. The password cracker suite is particularly impressive. Would love to see more documentation though.",
                date: "Dec 8, 2023"
            },
            {
                id: 3,
                name: "Michael Chen",
                role: "Penetration Tester",
                rating: 5,
                content: "As a professional pentester, I'm very impressed with the quality of these tools. They've become an essential part of my toolkit.",
                date: "Dec 5, 2023"
            },
            {
                id: 4,
                name: "Jessica Martinez",
                role: "Security Consultant",
                rating: 4,
                content: "The web app pentest tool saved me countless hours of manual testing. The reporting features are excellent for client deliverables.",
                date: "Dec 1, 2023"
            }
        ];

        // Application State
        let currentUser = null;
        let cart = [];
        let wishlist = [];
        let currentView = 'grid';
        let currentProduct = null;
        let terminalInterval = null;

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            initializeApp();
        });

        function initializeApp() {
            loadUserData();
            loadCart();
            loadWishlist();
            renderProducts();
            renderArticles();
            renderFAQs();
            renderReviews();
            setupEventListeners();
            setupParticleBackground();
            setupTerminalAnimation();
            setCurrentYear();
        }

        function setupEventListeners() {
            // Theme toggle
            themeToggle.addEventListener('click', toggleTheme);

            // Auth
            loginBtn.addEventListener('click', (e) => { e.stopPropagation(); openAuthModal('login'); });
            registerBtn.addEventListener('click', (e) => { e.stopPropagation(); openAuthModal('register'); });
            closeAuthModal.addEventListener('click', (e) => { e.stopPropagation(); closeModals(); });

            authTabs.forEach(tab => {
                tab.addEventListener('click', (e) => { e.stopPropagation(); switchAuthTab(tab.dataset.tab); });
            });
            switchToLogin.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); switchAuthTab('login'); });
            switchToRegister.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); switchAuthTab('register'); });
            loginForm.addEventListener('submit', handleLogin);
            registerForm.addEventListener('submit', handleRegister);

            // User menu
            userMenu.addEventListener('click', (e) => { e.stopPropagation(); toggleUserDropdown(); });
            dashboardBtn.addEventListener('click', (e) => { e.stopPropagation(); openDashboard(); });
            logoutBtn.addEventListener('click', (e) => { e.stopPropagation(); handleLogout(); });

            // Wishlist (nav)
            wishlistBtnNav.addEventListener('click', (e) => { e.stopPropagation(); if (!currentUser) { openAuthModal('login'); return; } wishlistModal.classList.add('active'); });
            closeWishlistModal.addEventListener('click', (e) => { e.stopPropagation(); closeModals(); });

            // Cart (nav)
            cartBtn.addEventListener('click', (e) => { e.stopPropagation(); cartModal.classList.add('active'); });
            closeCartModal.addEventListener('click', (e) => { e.stopPropagation(); closeModals(); });
            clearCart.addEventListener('click', (e) => { e.stopPropagation(); clearCartItems(); });

            // Dashboard
            closeDashboardModal.addEventListener('click', (e) => { e.stopPropagation(); closeModals(); });

            // Quick view
            closeQuickView.addEventListener('click', (e) => { e.stopPropagation(); closeModals(); });
            quickViewAddToCart.addEventListener('click', (e) => { e.stopPropagation(); addCurrentProductToCart(); });
            quickViewWishlist.addEventListener('click', (e) => { e.stopPropagation(); toggleCurrentProductWishlist(); });

            // Navigation hamburger
            hamburger.addEventListener('click', (e) => { e.stopPropagation(); toggleMobileMenu(); });

            // Shop controls
            searchInput.addEventListener('input', handleSearch);
            sortSelect.addEventListener('change', handleSort);
            viewButtons.forEach(btn => {
                btn.addEventListener('click', (e) => { e.stopPropagation(); setView(btn.dataset.view); });
            });

            // KB
            kbSearch.addEventListener('input', handleKBSearch);
            kbCategories.forEach(category => {
                category.addEventListener('click', (e) => { e.stopPropagation(); filterArticles(category.dataset.category); });
            });

            // FAQ
            faqSearch.addEventListener('input', handleFAQSearch);

            // Reviews
            reviewSort.addEventListener('change', handleReviewSort);

            // Ticket system
            ticketForm.addEventListener('submit', handleTicketSubmit);

            // Global click to close modals — but ignore clicks that originated on controls we intentionally stopped propagation for
            document.addEventListener('click', (e) => {
                // user dropdown
                if (!userMenu.contains(e.target) && userDropdown.classList.contains('active')) {
                    userDropdown.classList.remove('active');
                }

                if (authModal.classList.contains('active') && !e.target.closest('.modal-content')) {
                    closeModals();
                }

                if (dashboardModal.classList.contains('active') && !e.target.closest('.modal-content')) {
                    closeModals();
                }

                if (quickViewModal.classList.contains('active') && !e.target.closest('.quick-view-content')) {
                    closeModals();
                }

                if (cartModal.classList.contains('active') && !e.target.closest('.modal-content') && !e.target.closest('#cartBtn')) {
                    closeModals();
                }

                if (wishlistModal.classList.contains('active') && !e.target.closest('.modal-content') && !e.target.closest('#wishlistBtnNav')) {
                    closeModals();
                }
            });
        }

        // Theme Functions
        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('hexvane_theme', newTheme);
        }

        // User Functions
        function loadUserData() {
            const savedUser = localStorage.getItem('hexvane_user');
            const savedTheme = localStorage.getItem('hexvane_theme');
            
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                updateUserUI();
            }
            
            if (savedTheme) {
                document.documentElement.setAttribute('data-theme', savedTheme);
            }
        }

        function saveUserData() {
            if (currentUser) {
                localStorage.setItem('hexvane_user', JSON.stringify(currentUser));
            }
        }

        function updateUserUI() {
            if (currentUser) {
                userActions.style.display = 'none';
                userMenu.style.display = 'flex';
                userAvatar.textContent = currentUser.username.charAt(0).toUpperCase();
            } else {
                userActions.style.display = 'flex';
                userMenu.style.display = 'none';
            }
        }

        function toggleUserDropdown() {
            userDropdown.classList.toggle('active');
        }

        function openAuthModal(tab) {
            authModal.classList.add('active');
            switchAuthTab(tab);
        }

        function switchAuthTab(tab) {
            authTabs.forEach(tabElement => {
                tabElement.classList.toggle('active', tabElement.dataset.tab === tab);
            });
            
            authForms.forEach(form => {
                form.classList.toggle('active', form.id === `${tab}Form`);
            });
            
            authModalTitle.textContent = tab === 'login' ? 'Login' : 'Register';
        }

        function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Mock login - in a real app, this would communicate with a backend
            currentUser = {
                username: email.split('@')[0],
                email: email,
                subscription: 'pro'
            };
            
            saveUserData();
            updateUserUI();
            closeModals();
            showToast('Login successful!');
        }

        function handleRegister(e) {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            if (password !== confirmPassword) {
                showToast('Passwords do not match');
                return;
            }
            
            // Mock registration - in a real app, this would communicate with a backend
            currentUser = {
                username: username,
                email: email,
                subscription: 'free'
            };
            
            saveUserData();
            updateUserUI();
            closeModals();
            showToast('Registration successful!');
        }

        function handleLogout() {
            currentUser = null;
            saveUserData();
            updateUserUI();
            userDropdown.classList.remove('active');
            showToast('Logged out successfully');
        }

        function openDashboard() {
            if (!currentUser) {
                openAuthModal('login');
                return;
            }
            
            dashboardUsername.textContent = currentUser.username;
            dashboardModal.classList.add('active');
            userDropdown.classList.remove('active');
        }

        // Cart Functions
        function loadCart() {
            const savedCart = localStorage.getItem('hexvane_cart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCartUI();
            }
        }

        function saveCart() {
            localStorage.setItem('hexvane_cart', JSON.stringify(cart));
            updateCartUI();
        }

        function updateCartUI() {
            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
            renderCartItems();
            updateCartTotal();
        }

        function renderCartItems() {
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
                return;
            }
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">$${item.price} x ${item.quantity}</div>
                    </div>
                    <button class="remove-item" data-id="${item.id}">🗑️</button>
                `;
                cartItems.appendChild(cartItem);
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    removeFromCart(id);
                });
            });
        }

        function updateCartTotal() {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `$${total.toFixed(2)}`;
        }

        function addToCart(product) {
            const existingItem = cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            saveCart();
            showToast('Product added to cart!');
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            saveCart();
            showToast('Product removed from cart');
        }

        function clearCartItems() {
            cart = [];
            saveCart();
            showToast('Cart cleared');
        }

        function openCart() {
            cartModal.classList.add('active');
        }

        // Wishlist Functions
        function loadWishlist() {
            const savedWishlist = localStorage.getItem('hexvane_wishlist');
            if (savedWishlist) {
                wishlist = JSON.parse(savedWishlist);
                updateWishlistUI();
            }
        }

        function saveWishlist() {
            localStorage.setItem('hexvane_wishlist', JSON.stringify(wishlist));
            updateWishlistUI();
        }

        function updateWishlistUI() {
            wishlistCount.textContent = wishlist.length;
            renderWishlistItems();
        }

        function renderWishlistItems() {
            wishlistItems.innerHTML = '';
            
            if (wishlist.length === 0) {
                wishlistItems.innerHTML = '<p class="empty-wishlist">Your wishlist is empty</p>';
                return;
            }
            
            wishlist.forEach(item => {
                const wishlistItem = document.createElement('div');
                wishlistItem.className = 'wishlist-item';
                wishlistItem.innerHTML = `
                    <div class="wishlist-item-info">
                        <h4>${item.name}</h4>
                        <div class="wishlist-item-price">$${item.price}</div>
                    </div>
                    <div class="wishlist-item-actions">
                        <button class="add-to-cart-from-wishlist" data-id="${item.id}">Add to Cart</button>
                        <button class="remove-from-wishlist" data-id="${item.id}">🗑️</button>
                    </div>
                `;
                wishlistItems.appendChild(wishlistItem);
            });
            
            // Add event listeners to action buttons
            document.querySelectorAll('.add-to-cart-from-wishlist').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    const product = products.find(p => p.id === id);
                    if (product) {
                        addToCart(product);
                    }
                });
            });
            
            document.querySelectorAll('.remove-from-wishlist').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.dataset.id);
                    removeFromWishlist(id);
                });
            });
        }

        function addToWishlist(product) {
            const existingItem = wishlist.find(item => item.id === product.id);
            
            if (!existingItem) {
                wishlist.push(product);
                saveWishlist();
                showToast('Product added to wishlist!');
            }
        }

        function removeFromWishlist(productId) {
            wishlist = wishlist.filter(item => item.id !== productId);
            saveWishlist();
            showToast('Product removed from wishlist');
        }

        function toggleWishlist(product) {
            const existingItem = wishlist.find(item => item.id === product.id);
            
            if (existingItem) {
                removeFromWishlist(product.id);
            } else {
                addToWishlist(product);
            }
        }

        function openWishlist() {
            if (!currentUser) {
                openAuthModal('login');
                return;
            }
            wishlistModal.classList.add('active');
        }

        // Product Functions
        function renderProducts(productsToRender = products) {
            productsGrid.innerHTML = '';
            
            if (productsToRender.length === 0) {
                productsGrid.innerHTML = '<p class="no-products">No products found</p>';
                return;
            }
            
            productsToRender.forEach(product => {
                const isInWishlist = wishlist.some(item => item.id === product.id);
                
                const productCard = document.createElement('div');
                productCard.className = `product-card ${currentView === 'list' ? 'list-view' : ''}`;
                
                productCard.innerHTML = `
                    <div class="product-image">
                        ${product.image}
                        <div class="product-actions">
                            <button class="product-action quick-view-btn" data-id="${product.id}">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" stroke-width="2"/>
                                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            </button>
                            <button class="product-action wishlist-btn ${isInWishlist ? 'in-wishlist' : ''}" data-id="${product.id}">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="${isInWishlist ? 'currentColor' : 'none'}" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-header">
                            <div class="product-tags">
                                ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                                <span class="product-badge">${product.badge}</span>
                            </div>
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-description">${product.description}</p>
                        </div>
                        <div class="product-footer">
                            <div class="product-price">$${product.price}</div>
                            <button class="add-to-cart" data-id="${product.id}">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C15.895 17 15 17.895 15 19C15 20.105 15.895 21 17 21C18.105 21 19 20.105 19 19C19 17.895 18.105 17 17 17ZM9 19C9 20.105 8.105 21 7 21C5.895 21 5 20.105 5 19C5 17.895 5.895 17 7 17C8.105 17 9 17.895 9 19Z" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                `;
                
                productsGrid.appendChild(productCard);
            });
            
            attachProductListeners();
        }

        function attachProductListeners() {
            // add-to-cart buttons
            document.querySelectorAll('.add-to-cart').forEach(btn => {
                btn.removeEventListener('click', addToCartHandler); // safe remove if present
                btn.addEventListener('click', addToCartHandler);
            });

            // wishlist buttons
            document.querySelectorAll('.wishlist-btn').forEach(btn => {
                btn.removeEventListener('click', wishlistBtnHandler);
                btn.addEventListener('click', wishlistBtnHandler);
            });

            // quick view
            document.querySelectorAll('.quick-view-btn').forEach(btn => {
                btn.removeEventListener('click', quickViewHandler);
                btn.addEventListener('click', quickViewHandler);
            });
        }

        function addToCartHandler(e) {
            e.stopPropagation();
            const btn = e.currentTarget;
            const id = parseInt(btn.dataset.id, 10);
            const product = products.find(p => p.id === id);
            if (product) addToCart(product);
        }

        function wishlistBtnHandler(e) {
            e.stopPropagation();
            if (!currentUser) {
                openAuthModal('login');
                return;
            }
            const btn = e.currentTarget;
            const id = parseInt(btn.dataset.id, 10);
            const product = products.find(p => p.id === id);
            if (product) {
                toggleWishlist(product);
                e.target.closest('.wishlist-btn').classList.toggle('in-wishlist');
                e.target.closest('.wishlist-btn').querySelector('svg').setAttribute('fill', 
                    e.target.closest('.wishlist-btn').classList.contains('in-wishlist') ? 'currentColor' : 'none');
            }
        }

        function openQuickView(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            currentProduct = product;
            quickViewTitle.textContent = product.name;
            quickViewImage.textContent = product.image;
            quickViewPrice.textContent = `$${product.price}`;
            quickViewDescription.textContent = product.description;
            
            // Clear previous tags
            quickViewTags.innerHTML = '';
            
            // Add new tags
            product.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'quick-view-tag';
                tagElement.textContent = tag;
                quickViewTags.appendChild(tagElement);
            });
            
            // Update wishlist button state
            const isInWishlist = wishlist.some(item => item.id === product.id);
            quickViewWishlist.classList.toggle('in-wishlist', isInWishlist);
            quickViewWishlist.querySelector('svg').setAttribute('fill', isInWishlist ? 'currentColor' : 'none');
            
            quickViewModal.classList.add('active');
        }

        function addCurrentProductToCart() {
            if (currentProduct) {
                addToCart(currentProduct);
            }
        }

        function toggleCurrentProductWishlist() {
            if (!currentUser) {
                openAuthModal('login');
                return;
            }
            
            if (currentProduct) {
                toggleWishlist(currentProduct);
                quickViewWishlist.classList.toggle('in-wishlist');
                quickViewWishlist.querySelector('svg').setAttribute('fill', 
                    quickViewWishlist.classList.contains('in-wishlist') ? 'currentColor' : 'none');
            }
        }

        function handleSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            
            if (searchTerm === '') {
                renderProducts();
                return;
            }
            
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
            
            renderProducts(filteredProducts);
        }

        function handleSort() {
            const sortValue = sortSelect.value;
            let sortedProducts = [...products];
            
            switch(sortValue) {
                case 'name':
                    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'price-asc':
                    sortedProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    sortedProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'popularity':
                    sortedProducts.sort((a, b) => b.popularity - a.popularity);
                    break;
            }
            
            renderProducts(sortedProducts);
        }

        function setView(view) {
            currentView = view;
            viewButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.view === view);
            });
            
            productsGrid.className = `products-grid ${view}-view`;
            renderProducts();
        }

        // Knowledge Base Functions
        function renderArticles(articlesToRender = articles) {
            kbGrid.innerHTML = '';
            
            if (articlesToRender.length === 0) {
                kbGrid.innerHTML = '<p class="no-articles">No articles found</p>';
                return;
            }
            
            articlesToRender.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.className = 'kb-article';
                articleElement.innerHTML = `
                    <div class="kb-article-image">${article.image}</div>
                    <div class="kb-article-content">
                        <div class="kb-article-meta">
                            <span class="kb-article-category">${article.category}</span>
                            <span class="kb-article-date">${article.date}</span>
                        </div>
                        <h3 class="kb-article-title">${article.title}</h3>
                        <p class="kb-article-excerpt">${article.excerpt}</p>
                        <a href="#" class="kb-article-link">Read more →</a>
                    </div>
                `;
                kbGrid.appendChild(articleElement);
            });
        }

        function handleKBSearch() {
            const searchTerm = kbSearch.value.toLowerCase();
            
            if (searchTerm === '') {
                renderArticles();
                return;
            }
            
            const filteredArticles = articles.filter(article => 
                article.title.toLowerCase().includes(searchTerm) ||
                article.excerpt.toLowerCase().includes(searchTerm) ||
                article.category.toLowerCase().includes(searchTerm)
            );
            
            renderArticles(filteredArticles);
        }

        function filterArticles(category) {
            kbCategories.forEach(cat => {
                cat.classList.toggle('active', cat.dataset.category === category);
            });
            
            if (category === 'all') {
                renderArticles();
                return;
            }
            
            const filteredArticles = articles.filter(article => article.category === category);
            renderArticles(filteredArticles);
        }

        // FAQ Functions
        function renderFAQs() {
            faqList.innerHTML = '';
            
            faqs.forEach((faq, index) => {
                const faqItem = document.createElement('div');
                faqItem.className = 'faq-item';
                faqItem.innerHTML = `
                    <div class="faq-question">
                        ${faq.question}
                        <span class="faq-icon">▼</span>
                    </div>
                    <div class="faq-answer">
                        ${faq.answer}
                    </div>
                `;
                faqList.appendChild(faqItem);
                
                // Add click event to toggle answer
                const questionElement = faqItem.querySelector('.faq-question');
                questionElement.addEventListener('click', () => {
                    faqItem.classList.toggle('active');
                });
            });
        }

        function handleFAQSearch() {
            const searchTerm = faqSearch.value.toLowerCase();
            
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Review Functions
        function renderReviews(reviewsToRender = reviews) {
            reviewsGrid.innerHTML = '';
            
            reviewsToRender.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review-card';
                reviewElement.innerHTML = `
                    <div class="review-header">
                        <div class="reviewer">
                            <div class="reviewer-avatar">${review.name.charAt(0)}</div>
                            <div class="reviewer-info">
                                <h4>${review.name}</h4>
                                <p>${review.role}</p>
                            </div>
                        </div>
                        <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                    </div>
                    <div class="review-content">
                        ${review.content}
                    </div>
                    <div class="review-date">${review.date}</div>
                `;
                reviewsGrid.appendChild(reviewElement);
            });
        }

        function handleReviewSort() {
            const sortValue = reviewSort.value;
            let sortedReviews = [...reviews];
            
            switch(sortValue) {
                case 'newest':
                    // Already sorted by date in the data
                    break;
                case 'highest':
                    sortedReviews.sort((a, b) => b.rating - a.rating);
                    break;
                case 'lowest':
                    sortedReviews.sort((a, b) => a.rating - b.rating);
                    break;
            }
            
            renderReviews(sortedReviews);
        }

        // Ticket System Functions
        function handleTicketSubmit(e) {
            e.preventDefault();
            
            // In a real application, this would send the ticket data to a backend
            showToast('Support ticket submitted successfully!');
            ticketForm.reset();
        }

        // Utility Functions
        function closeModals() {
            authModal.classList.remove('active');
            dashboardModal.classList.remove('active');
            quickViewModal.classList.remove('active');
            cartModal.classList.remove('active');
            wishlistModal.classList.remove('active');
        }

        function toggleMobileMenu() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        }

        function showToast(message) {
            toast.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        function setCurrentYear() {
            currentYear.textContent = new Date().getFullYear();
        }

        // Animation Functions
        function setupParticleBackground() {
            const canvas = document.getElementById('particleCanvas');
            if (!canvas) return;
            
            // Set canvas to full screen
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const ctx = canvas.getContext('2d');
            const particles = [];
            const particleCount = 100;
            
            // Particle class
            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 2 + 1;
                    this.speedX = Math.random() * 1 - 0.5;
                    this.speedY = Math.random() * 1 - 0.5;
                    this.color = `rgba(${Math.random() * 70 + 150}, ${Math.random() * 100 + 150}, ${Math.random() * 200 + 55}, 0.7)`;
                }
                
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    
                    if (this.x > canvas.width || this.x < 0) {
                        this.speedX = -this.speedX;
                    }
                    if (this.y > canvas.height || this.y < 0) {
                        this.speedY = -this.speedY;
                    }
                }
                
                draw() {
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            
            // Create particles
            function createParticles() {
                for (let i = 0; i < particleCount; i++) {
                    particles.push(new Particle());
                }
            }
            
            // Connect particles with lines
            function connectParticles() {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 100) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance/1000})`;
                            ctx.lineWidth = 0.5;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
            
            // Animation loop
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw();
                }
                
                connectParticles();
                requestAnimationFrame(animate);
            }
            
            createParticles();
            animate();
            
            // Resize handler
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                createParticles();
            });
        }

        function setupTerminalAnimation() {
            const terminalBody = document.getElementById('terminalBody');
            if (!terminalBody) return;
            
            const commands = [
                {command: "nmap -sS -O 192.168.1.0/24", output: ["Starting Nmap 7.80 ( https://nmap.org ) at 2023-12-15 10:00 UTC", "Nmap scan report for 192.168.1.1", "Host is up (0.0030s latency).", "Not shown: 995 closed ports", "PORT    STATE SERVICE", "22/tcp  open  ssh", "80/tcp  open  http", "443/tcp open  https"]},
                {command: "searchsploit Apache 2.4.29", output: ["Apache 2.4.29 - Remote Code Execution", "Apache 2.4.29 - Denial of Service"]},
                {command: "python exploit.py --target 192.168.1.10", output: ["[+] Initializing exploit...", "[+] Target vulnerable to CVE-2021-41773", "[+] Uploading payload...", "[+] Payload executed successfully", "[+] Reverse shell connected"]},
                {command: "hashcat -m 0 -a 0 hashes.txt rockyou.txt", output: ["Hashcat v6.2.5 starting...", "Dictionary cache built:", "* Filename..: rockyou.txt", "* Passwords.: 14344392", "* Bytes.....: 139921507", "* Keyspace..: 14344392", "Recovered........: 2/5 (40.00%) Digests", "Progress.........: 5432112/14344392 (37.87%)", "Speed...........: 123.4 kH/s (5.32ms)"]}
            ];
            
            let commandIndex = 0;
            
            function typeText(element, text, speed, callback) {
                let i = 0;
                element.innerHTML = '';
                
                function type() {
                    if (i < text.length) {
                        element.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    } else if (callback) {
                        callback();
                    }
                }
                
                type();
            }
            
            function addCommand() {
                if (commandIndex >= commands.length) {
                    commandIndex = 0;
                    terminalBody.innerHTML = '';
                }
                
                const command = commands[commandIndex];
                
                // Add command line
                const commandLine = document.createElement('div');
                commandLine.className = 'terminal-line';
                commandLine.innerHTML = `<span class="terminal-prompt">$</span><span class="terminal-command"></span>`;
                terminalBody.appendChild(commandLine);
                
                const commandElement = commandLine.querySelector('.terminal-command');
                
                // Type the command
                typeText(commandElement, command.command, 50, () => {
                    // Add output after command is typed
                    setTimeout(() => {
                        command.output.forEach(line => {
                            const outputLine = document.createElement('div');
                            outputLine.className = 'terminal-output';
                            outputLine.textContent = line;
                            terminalBody.appendChild(outputLine);
                        });
                        
                        // Scroll to bottom
                        terminalBody.scrollTop = terminalBody.scrollHeight;
                        
                        // Move to next command
                        commandIndex++;
                        setTimeout(addCommand, 2000);
                    }, 500);
                });
                
                // Scroll to bottom
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
            
            // Start the animation
            addCommand();
        }

        // Show only selected section
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').replace('#', '');
                document.querySelectorAll('section').forEach(sec => {
                    if (sec.id === targetId) {
                        sec.style.display = '';
                    } else {
                        sec.style.display = 'none';
                    }
                });
                // Optionally scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // Show all sections on page load
        document.querySelectorAll('section').forEach(sec => sec.style.display = '');