// Til ma'lumotlari
const translations = {
    uz: {
        'site-title': 'SavdoGo',
        'catalog': 'Katalog',
        'profile': 'Profil',
        'cart': 'Savat',
        'home': 'Bosh sahifa',
        'search': 'Mahsulot qidirish...',
        'categories': 'Kategoriyalar',
        'all-products': 'Barchasi',
        'food': 'Ovqatlar',
        'kfc': 'KFC',
        'chop-pizza': 'Chop Pizza',
        'apex-pizza': 'Apex Pizza',
        'clothing': 'Kiyimlar',
        'electronics': 'Elektronika',
        'sports': 'Sport',
        'popular-products': 'Mashhur Buyumlar',
        'your-cart': 'Sizning Savatingiz',
        'first-name': 'Ism',
        'last-name': 'Familiya',
        'address': 'Manzil',
        'phone': 'Telefon raqami (+998)',
        'verify-phone': 'Telefonni tasdiqlash',
        'sms-code': 'SMS kodni kiriting',
        'confirm-sms': 'SMS kodni tasdiqlash',
        'close': 'Yopish',
        'checkout': 'To‘lov qilish',
        'payment-method': 'To‘lov usulini tanlang',
        'cash': 'Naqt pul',
        'card': 'Karta',
        'credit': 'Kredit',
        'card-number': 'Karta raqami (16 raqam)',
        'card-expiry': 'MM/YY',
        'face-id': 'Face ID tasdiqlash',
        'confirm-payment': 'To‘lovni tasdiqlash',
        'receipt': 'To‘lov Cheki',
        'your-profile': 'Sizning Profilingiz',
        'save': 'Saqlash',
        'footer-about': 'O‘zbekistondagi eng yaxshi online savdo platformasi!',
        'links': 'Havolalar',
        'about-us': 'Biz haqimizda',
        'contact': 'Aloqa',
        'terms': 'Foydalanish shartlari',
        'copyright': '© 2025 SavdoGo. Barcha huquqlar himoyalangan.',
        'invalid-card': 'Bunday karta mavjud emas!',
        'invalid-card-number': 'Karta raqami 16 raqamdan iborat bo‘lishi kerak!',
        'invalid-expiry': 'MM/YY formatida kiriting!',
        'card-type': 'Karta turi',
        'empty-cart': 'Savat bo‘sh!',
        'fill-all': 'Iltimos, barcha maydonlarni to‘ldiring!',
        'invalid-phone': 'Iltimos, to‘g‘ri telefon raqami kiriting (+998 formatida)!',
        'invalid-sms-code': 'Iltimos, to‘g‘ri SMS kodni kiriting!',
        'sms-code-sent': 'Sizning SMS kodingiz',
        'phone-verified': 'Telefon raqami tasdiqlandi!',
        'face-id-required': 'Iltimos, Face ID ni tasdiqlang!',
        'face-id-verified': 'Face ID tasdiqlandi (surat olish emulyatsiyasi)!',
        'add-to-cart': 'Savatga qo‘shish',
        'added-to-cart': 'savatga qo‘shildi!',
        'profile-saved': 'Profil ma’lumotlari saqlandi!',
        'total': 'Jami',
        'order': 'Buyurtma',
        'date': 'Sana'
    },
    ru: {
        'site-title': 'SavdoGo',
        'catalog': 'Каталог',
        'profile': 'Профиль',
        'cart': 'Корзина',
        'home': 'Главная',
        'search': 'Поиск товаров...',
        'categories': 'Категории',
        'all-products': 'Все',
        'food': 'Еды',
        'kfc': 'KFC',
        'chop-pizza': 'Чоп Пицца',
        'apex-pizza': 'Апекс Пицца',
        'clothing': 'Одежда',
        'electronics': 'Электроника',
        'sports': 'Спорт',
        'popular-products': 'Популярные товары',
        'your-cart': 'Ваша корзина',
        'first-name': 'Имя',
        'last-name': 'Фамилия',
        'address': 'Адрес',
        'phone': 'Номер телефона (+998)',
        'verify-phone': 'Подтвердить телефон',
        'sms-code': 'Введите SMS-код',
        'confirm-sms': 'Подтвердить SMS-код',
        'close': 'Закрыть',
        'checkout': 'Оформить заказ',
        'payment-method': 'Выберите способ оплаты',
        'cash': 'Наличные',
        'card': 'Карта',
        'credit': 'Кредит',
        'card-number': 'Номер карты (16 цифр)',
        'card-expiry': 'MM/YY',
        'face-id': 'Подтверждение Face ID',
        'confirm-payment': 'Подтвердить оплату',
        'receipt': 'Чек оплаты',
        'your-profile': 'Ваш профиль',
        'save': 'Сохранить',
        'footer-about': 'Лучшая платформа для онлайн-шопинга в Узбекистане!',
        'links': 'Ссылки',
        'about-us': 'О нас',
        'contact': 'Контакты',
        'terms': 'Условия использования',
        'copyright': '© 2025 SavdoGo. Все права защищены.',
        'invalid-card': 'Такая карта не существует!',
        'invalid-card-number': 'Номер карты должен состоять из 16 цифр!',
        'invalid-expiry': 'Введите в формате MM/YY!',
        'card-type': 'Тип карты',
        'empty-cart': 'Корзина пуста!',
        'fill-all': 'Пожалуйста, заполните все поля!',
        'invalid-phone': 'Пожалуйста, введите правильный номер телефона (+998)!',
        'invalid-sms-code': 'Пожалуйста, введите правильный SMS-код!',
        'sms-code-sent': 'Ваш SMS-код',
        'phone-verified': 'Номер телефона подтвержден!',
        'face-id-required': 'Пожалуйста, подтвердите Face ID!',
        'face-id-verified': 'Face ID подтвержден (эмуляция)!',
        'add-to-cart': 'Добавить в корзину',
        'added-to-cart': 'добавлено в корзину!',
        'profile-saved': 'Данные профиля сохранены!',
        'total': 'Итого',
        'order': 'Заказ',
        'date': 'Дата'
    },
    en: {
        'site-title': 'SavdoGo',
        'catalog': 'Catalog',
        'profile': 'Profile',
        'cart': 'Cart',
        'home': 'Home',
        'search': 'Search products...',
        'categories': 'Categories',
        'all-products': 'All',
        'food': 'Foods',
        'kfc': 'KFC',
        'chop-pizza': 'Chop Pizza',
        'apex-pizza': 'Apex Pizza',
        'clothing': 'Clothing',
        'electronics': 'Electronics',
        'sports': 'Sports',
        'popular-products': 'Popular Products',
        'your-cart': 'Your Cart',
        'first-name': 'First Name',
        'last-name': 'Last Name',
        'address': 'Address',
        'phone': 'Phone Number (+998)',
        'verify-phone': 'Verify Phone',
        'sms-code': 'Enter SMS Code',
        'confirm-sms': 'Confirm SMS Code',
        'close': 'Close',
        'checkout': 'Checkout',
        'payment-method': 'Select Payment Method',
        'cash': 'Cash',
        'card': 'Card',
        'credit': 'Credit',
        'card-number': 'Card Number (16 digits)',
        'card-expiry': 'MM/YY',
        'face-id': 'Face ID Verification',
        'confirm-payment': 'Confirm Payment',
        'receipt': 'Payment Receipt',
        'your-profile': 'Your Profile',
        'save': 'Save',
        'footer-about': 'The best online shopping platform in Uzbekistan!',
        'links': 'Links',
        'about-us': 'About Us',
        'contact': 'Contact',
        'terms': 'Terms of Use',
        'copyright': '© 2025 SavdoGo. All rights reserved.',
        'invalid-card': 'This card does not exist!',
        'invalid-card-number': 'Card number must be 16 digits!',
        'invalid-expiry': 'Enter in MM/YY format!',
        'card-type': 'Card Type',
        'empty-cart': 'Cart is empty!',
        'fill-all': 'Please fill in all fields!',
        'invalid-phone': 'Please enter a valid phone number (+998 format)!',
        'invalid-sms-code': 'Please enter a valid SMS code!',
        'sms-code-sent': 'Your SMS code',
        'phone-verified': 'Phone number verified!',
        'face-id-required': 'Please verify Face ID!',
        'face-id-verified': 'Face ID verified (emulation)!',
        'add-to-cart': 'Add to Cart',
        'added-to-cart': 'added to cart!',
        'profile-saved': 'Profile data saved!',
        'total': 'Total',
        'order': 'Order',
        'date': 'Date'
    }
};

// Mahsulot ma'lumotlari
const productData = [
    { id: '1', title: { uz: "KFC Burger", ru: "Бургер KFC", en: "KFC Burger" }, price: 25000, category: "food", subcategory: "kfc", rating: 4, reviews: 123, image: "https://via.placeholder.com/150x200" },
    { id: '2', title: { uz: "Chop Pizza Margherita", ru: "Пицца Маргарита Chop", en: "Chop Pizza Margherita" }, price: 50000, category: "food", subcategory: "Chopar-pizza", rating: 5, reviews: 456, image: "https://via.placeholder.com/150x200" },
    { id: '3', title: { uz: "Apex Pizza Pepperoni", ru: "Пицца Пепперони Apex", en: "Apex Pizza Pepperoni" }, price: 55000, category: "food", subcategory: "apex-pizza", rating: 4, reviews: 89, image: "https://via.placeholder.com/150x200" },
    { id: '4', title: { uz: "KFC Twister", ru: "Твистер KFC", en: "KFC Twister" }, price: 30000, category: "ovqatlar", subcategory: "kfc", rating: 5, reviews: 321, image: "https://via.placeholder.com/150x200" },
    { id: '5', title: { uz: "Futbolka", ru: "Футболка", en: "T-Shirt" }, price: 120000, category: "clothing", rating: 4, reviews: 200, image: "https://via.placeholder.com/150x200" },
    { id: '6', title: { uz: "Smartfon", ru: "Смартфон", en: "Smartphone" }, price: 2500000, category: "electronics", rating: 5, reviews: 150, image: "https://via.placeholder.com/150x200" },
    { id: '7', title: { uz: "Sport Sumkasi", ru: "Спортивная сумка", en: "Sports Bag" }, price: 350000, category: "sports", rating: 4, reviews: 95, image: "https://via.placeholder.com/150x200" },
    { id: '8', title: { uz: "Apex Pizza Quattro", ru: "Пицца Кватро Apex", en: "Apex Pizza Quattro" }, price: 60000, category: "food", subcategory: "apex-pizza", rating: 4, reviews: 180, image: "https://via.placeholder.com/150x200" }
];

// Savat va profil ma'lumotlari
let cart = [];
try {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (Array.isArray(storedCart)) {
        cart = storedCart;
    }
} catch (e) {
    console.error('Error parsing cart from localStorage:', e);
}

let profile = { firstName: "", lastName: "", address: "", phone: "", verifiedPhone: false };
try {
    const storedProfile = JSON.parse(localStorage.getItem('profile'));
    if (storedProfile && typeof storedProfile === 'object') {
        profile = storedProfile;
    }
} catch (e) {
    console.error('Error parsing profile from localStorage:', e);
}

let generatedSMSCode = '';
let generatedProfileSMSCode = '';
let isFaceIdVerified = false;
let currentLang = localStorage.getItem('language') || 'uz';

// DOM elementlari
const mangaGrid = document.getElementById('mangaGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.querySelectorAll('.category-item');
const subcategoryFilters = document.querySelectorAll('.subcategory-item');
const foodToggle = document.querySelector('.food-toggle');
const foodSubmenu = document.getElementById('foodSubmenu');
const cartLink = document.getElementById('cartLink');
const mobileCartLink = document.getElementById('mobileCartLink');
const mobileMenuCartLink = document.getElementById('mobileMenuCartLink');
const cartCount = document.getElementById('cartCount');
const mobileCartCount = document.getElementById('mobileCartCount');
const mobileMenuCartCount = document.getElementById('mobileMenuCartCount');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const closeCart = document.getElementById('closeCart');
const checkoutModal = document.getElementById('checkout');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const paymentAddress = document.getElementById('address');
const phoneInput = document.getElementById('phone');
const verifyPhoneInput = document.getElementById('verifyPhone');
const smsCodeInput = document.getElementById('smsCode');
const paymentModal = document.getElementById('paymentModal');
const cashPaymentButton = document.getElementById('cashPayment');
const cardPaymentButton = document.getElementById('cardPayment');
const creditPaymentButton = document.getElementById('creditPayment');
const cardPaymentForm = document.getElementById('cardForm');
const cardNumberInput = document.getElementById('cardNumber');
const cardTypeLabel = document.getElementById('cardType');
const cardExpiryInput = document.getElementById('cardExpiry');
const creditForm = document.getElementById('creditForm');
const creditCardNumberInput = document.getElementById('creditCardNumber');
const creditCardTypeLabel = document.getElementById('creditCardType');
const creditCardExpiryInput = document.getElementById('creditCardExpiry');
const faceIdButton = document.getElementById('faceId');
const closePayment = document.getElementById('closePayment');
const confirmPaymentButton = document.getElementById('confirmPayment');
const receiptModal = document.getElementById('receiptModal');
const receiptContent = document.getElementById('receiptContent');
const closeReceipt = document.getElementById('closeReceipt');
const profileLink = document.getElementById('profileLink');
const mobileProfileLink = document.getElementById('mobileProfileLink');
const mobileMenuProfileLink = document.getElementById('mobileMenuProfileLink');
const profileModal = document.getElementById('profileModal');
const profileFirstNameInput = document.getElementById('profileFirstName');
const profileLastNameInput = document.getElementById('profileLastName');
const profileAddressInput = document.getElementById('profileAddress');
const profilePhoneInput = document.getElementById('profilePhone');
const verifyProfilePhoneInput = document.getElementById('verifyProfilePhone');
const profileSmsCodeInput = document.getElementById('profileSmsCode');
const confirmProfileSmsButton = document.getElementById('confirmProfileSms');
const saveProfileButton = document.getElementById('saveProfile');
const closeProfile = document.getElementById('closeProfile');
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');
const languageSelect = document.getElementById('languageSelect');
const catalogToggle = document.getElementById('catalogToggle');

// Tilni yangilash
function updateLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Translations for language "${lang}" not found. Falling back to 'uz'.`);
        lang = 'uz';
    }
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        el.textContent = translations[lang][key] || key;
    });
    document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-placeholder');
        el.placeholder = translations[lang][key] || '';
    });
    displayProducts(productData);
    updateCart();
}

// Til o‘zgartirish
if (languageSelect) {
    languageSelect.value = currentLang;
    languageSelect.addEventListener('change', () => {
        updateLanguage(languageSelect.value);
    });
} else {
    console.warn('languageSelect not found');
}

// Mahsulot kartalarini ko‘rsatish
function displayProducts(productList) {
    if (!mangaGrid) {
        console.error('mangaGrid element not found');
        return;
    }
    mangaGrid.innerHTML = '';
    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title[currentLang] || product.title['uz']}" class="w-full h-40 object-cover rounded">
            <h3 class="text-md font-semibold mt-2 truncate">${product.title[currentLang] || product.title['uz']}</h3>
            <p class="text-gray-600 text-sm">${product.price.toLocaleString()} UZS</p>
            <div class="flex items-center mt-2">
                <span class="text-yellow-400">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</span>
                <span class="text-gray-500 text-xs ml-2">(${product.reviews})</span>
            </div>
            <button class="add-to-cart mt-3 w-full bg-purple-700 text-white py-2 rounded-full hover:bg-purple-800 transition" data-id="${product.id}" data-lang="add-to-cart" aria-label="${translations[currentLang]['add-to-cart']} ${product.title[currentLang] || product.title['uz']}">${translations[currentLang]['add-to-cart']}</button>
        `;
        mangaGrid.appendChild(card);
    });
}

// Add-to-cart event listener (attached once)
mangaGrid?.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId);
    }
});

// Savatga qo‘shish
function addToCart(productId) {
    const product = productData.find(item => item.id === productId);
    if (!product) {
        console.error('Product not found for id:', productId);
        return;
    }
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    alert(`${product.title[currentLang] || product.title['uz']} ${translations[currentLang]['added-to-cart']}`);
}

// Savatni yangilash
function updateCart() {
    if (!cartCount || !mobileCartCount || !mobileMenuCartCount || !cartItems || !cartTotal) {
        console.error('Cart elements missing');
        return;
    }
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    mobileCartCount.textContent = totalItems;
    mobileMenuCartCount.textContent = totalItems;
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.className = 'flex justify-between mb-2';
        itemElement.innerHTML = `
            <span>${item.title[currentLang] || item.title['uz']} (x${item.quantity})</span>
            <span>${(item.price * item.quantity).toLocaleString()} UZS</span>
        `;
        cartItems.appendChild(itemElement);
    });
    cartTotal.textContent = `${translations[currentLang]['total']}: ${total.toLocaleString()} UZS`;
}

// SMS kod generatsiyasi
function generateSMSCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// Karta turini aniqlash
function detectCardType(number) {
    const firstDigit = number.charAt(0);
    const firstTwo = number.substring(0, 2);
    if (firstDigit === '4') return 'Visa';
    if (['51', '52', '53', '54', '55'].includes(firstTwo)) return 'Mastercard';
    if (firstDigit === '8') return 'Uzcard';
    if (firstDigit === '9') return 'Humo';
    return null;
}

// Telefon tasdiqlash (Savat)
if (verifyPhoneInput && phoneInput && smsCodeInput) {
    verifyPhoneInput.addEventListener('click', () => {
        if (phoneInput.value.match(/^\+998\d{9}$/)) {
            generatedSMSCode = generateSMSCode();
            smsCodeInput.classList.remove('hidden');
            alert(`${translations[currentLang]['sms-code-sent']}: ${generatedSMSCode}`);
        } else {
            alert(translations[currentLang]['invalid-phone']);
        }
    });
}

// Telefon tasdiqlash (Profil)
if (verifyProfilePhoneInput && profileSmsCodeInput && confirmProfileSmsButton && profilePhoneInput) {
    verifyProfilePhoneInput.addEventListener('click', () => {
        if (profilePhoneInput.value.match(/^\+998\d{9}$/)) {
            generatedProfileSMSCode = generateSMSCode();
            profileSmsCodeInput.classList.remove('hidden');
            confirmProfileSmsButton.classList.remove('hidden');
            verifyProfilePhoneInput.disabled = true;
            alert(`${translations[currentLang]['sms-code-sent']}: ${generatedProfileSMSCode}`);
        } else {
            alert(translations[currentLang]['invalid-phone']);
        }
    });

    confirmProfileSmsButton.addEventListener('click', () => {
        if (profileSmsCodeInput.value === generatedProfileSMSCode) {
            profile.phone = profilePhoneInput.value;
            profile.verifiedPhone = true;
            localStorage.setItem('profile', JSON.stringify(profile));
            alert(translations[currentLang]['phone-verified']);
            profileSmsCodeInput.classList.add('hidden');
            confirmProfileSmsButton.classList.add('hidden');
            verifyProfilePhoneInput.disabled = false;
        } else {
            alert(translations[currentLang]['invalid-sms-code']);
        }
    });
}

// Profilni saqlash
if (saveProfileButton && profileFirstNameInput && profileLastNameInput && profileAddressInput && profilePhoneInput) {
    saveProfileButton.addEventListener('click', () => {
        if (profileFirstNameInput.value && profileLastNameInput.value && profileAddressInput.value && profilePhoneInput.value) {
            profile = {
                firstName: profileFirstNameInput.value,
                lastName: profileLastNameInput.value,
                address: profileAddressInput.value,
                phone: profilePhoneInput.value,
                verifiedPhone: profile.verifiedPhone || false
            };
            localStorage.setItem('profile', JSON.stringify(profile));
            alert(translations[currentLang]['profile-saved']);
            profileModal?.classList.add('hidden');
        } else {
            alert(translations[currentLang]['fill-all']);
        }
    });
}

// Chekni ko‘rsatish
function showReceipt(paymentMethod) {
    if (!receiptContent || !receiptModal || !cartModal || !paymentModal) return;
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let receiptItems = cart.map(item => `
        <div class="flex justify-between mb-2">
            <span>${item.title[currentLang] || item.title['uz']} (x${item.quantity})</span>
            <span>${(item.price * item.quantity).toLocaleString()} UZS</span>
        </div>
    `).join('');
    receiptContent.innerHTML = `
        <p><strong>${translations[currentLang]['first-name']}:</strong> ${firstNameInput?.value || ''}</p>
        <p><strong>${translations[currentLang]['last-name']}:</strong> ${lastNameInput?.value || ''}</p>
        <p><strong>${translations[currentLang]['address']}:</strong> ${paymentAddress?.value || ''}</p>
        <p><strong>${translations[currentLang]['phone']}:</strong> ${phoneInput?.value || ''}</p>
        <p><strong>${translations[currentLang]['payment-method']}:</strong> ${paymentMethod}</p>
        <hr class="my-4">
        <h3 class="text-lg font-semibold mb-2">${translations[currentLang]['order']}:</h3>
        ${receiptItems}
        <p class="font-semibold mt-4">${translations[currentLang]['total']}: ${total.toLocaleString()} UZS</p>
        <p class="text-sm text-gray-500 mt-2">${translations[currentLang]['date']}: ${new Date().toLocaleString('uz-UZ')}</p>
    `;
    receiptModal.classList.remove('hidden');
    cartModal.classList.add('hidden');
    paymentModal.classList.add('hidden');
}

// Karta raqamini tekshirish (Card)
if (cardNumberInput && cardTypeLabel) {
    cardNumberInput.addEventListener('input', () => {
        const number = cardNumberInput.value.replace(/\D/g, '');
        const type = detectCardType(number);
        if (type) {
            cardTypeLabel.textContent = `${translations[currentLang]['card-type']}: ${type}`;
        } else {
            cardTypeLabel.textContent = '';
            if (number.length >= 4) {
                alert(translations[currentLang]['invalid-card']);
            }
        }
    });
}

// Karta raqamini tekshirish (Credit)
if (creditCardNumberInput && creditCardTypeLabel) {
    creditCardNumberInput.addEventListener('input', () => {
        const number = creditCardNumberInput.value.replace(/\D/g, '');
        const type = detectCardType(number);
        if (type) {
            creditCardTypeLabel.textContent = `${translations[currentLang]['card-type']}: ${type}`;
        } else {
            creditCardTypeLabel.textContent = '';
            if (number.length >= 4) {
                alert(translations[currentLang]['invalid-card']);
            }
        }
    });
}

// Karta formati tekshiruvi (Card)
if (cardExpiryInput) {
    cardExpiryInput.addEventListener('input', () => {
        let value = cardExpiryInput.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        cardExpiryInput.value = value;
    });
}

// Karta formati tekshiruvi (Credit)
if (creditCardExpiryInput) {
    creditCardExpiryInput.addEventListener('input', () => {
        let value = creditCardExpiryInput.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        creditCardExpiryInput.value = value;
    });
}

// Face ID emulyatsiyasi
if (faceIdButton) {
    faceIdButton.addEventListener('click', () => {
        isFaceIdVerified = true;
        alert(translations[currentLang]['face-id-verified']);
    });
}

// To‘lov usulini tanlash
if (cashPaymentButton && confirmPaymentButton) {
    cashPaymentButton.addEventListener('click', () => {
        cardPaymentForm?.classList.add('hidden');
        creditForm?.classList.add('hidden');
        confirmPaymentButton.classList.remove('hidden');
        confirmPaymentButton.onclick = () => {
            showReceipt(translations[currentLang]['cash']);
            resetCartAndForm();
        };
    });
}

if (cardPaymentButton && confirmPaymentButton) {
    cardPaymentButton.addEventListener('click', () => {
        cardPaymentForm?.classList.remove('hidden');
        creditForm?.classList.add('hidden');
        confirmPaymentButton.classList.remove('hidden');
        confirmPaymentButton.onclick = () => {
            if (!cardNumberInput?.value.match(/^\d{16}$/)) {
                alert(translations[currentLang]['invalid-card-number']);
                return;
            }
            if (!cardExpiryInput?.value.match(/^\d{2}\/\d{2}$/)) {
                alert(translations[currentLang]['invalid-expiry']);
                return;
            }
            const cardTypeValue = detectCardType(cardNumberInput.value);
            if (!cardTypeValue) {
                alert(translations[currentLang]['invalid-card']);
                return;
            }
            showReceipt(`${cardTypeValue}`);
            resetCartAndForm();
        };
    });
}

if (creditPaymentButton && confirmPaymentButton) {
    creditPaymentButton.addEventListener('click', () => {
        cardPaymentForm?.classList.add('hidden');
        creditForm?.classList.remove('hidden');
        confirmPaymentButton.classList.remove('hidden');
        confirmPaymentButton.onclick = () => {
            if (!creditCardNumberInput?.value.match(/^\d{16}$/)) {
                alert(translations[currentLang]['invalid-card-number']);
                return;
            }
            if (!creditCardExpiryInput?.value.match(/^\d{2}\/\d{2}$/)) {
                alert(translations[currentLang]['invalid-expiry']);
                return;
            }
            if (!isFaceIdVerified) {
                alert(translations[currentLang]['face-id-required']);
                return;
            }
            const cardTypeValue = detectCardType(creditCardNumberInput.value);
            if (!cardTypeValue) {
                alert(translations[currentLang]['invalid-card']);
                return;
            }
            showReceipt(`${translations[currentLang]['credit']} (${cardTypeValue})`);
            resetCartAndForm();
        };
    });
}

// Savat va formani tozalash
function resetCartAndForm() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    if (firstNameInput) firstNameInput.value = '';
    if (lastNameInput) lastNameInput.value = '';
    if (paymentAddress) paymentAddress.value = '';
    if (phoneInput) phoneInput.value = '';
    if (smsCodeInput) {
        smsCodeInput.value = '';
        smsCodeInput.classList.add('hidden');
    }
    generatedSMSCode = '';
    if (cardNumberInput) cardNumberInput.value = '';
    if (cardExpiryInput) cardExpiryInput.value = '';
    if (cardTypeLabel) cardTypeLabel.textContent = '';
    if (creditCardNumberInput) creditCardNumberInput.value = '';
    if (creditCardExpiryInput) creditCardExpiryInput.value = '';
    if (creditCardTypeLabel) creditCardTypeLabel.textContent = '';
    if (cardPaymentForm) cardPaymentForm.classList.add('hidden');
    if (creditForm) creditForm.classList.add('hidden');
    if (confirmPaymentButton) confirmPaymentButton.classList.add('hidden');
    isFaceIdVerified = false;
    updateCart();
}

// Qidiruv
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = productData.filter(product => (product.title[currentLang] || product.title['uz']).toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });
}

// Kategoriya filtrlari
if (categoryFilters) {
    categoryFilters.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            if (category === 'food') {
                foodSubmenu?.classList.toggle('hidden');
            } else {
                const filteredProducts = category === 'all' ? productData : productData.filter(product => product.category === category);
                displayProducts(filteredProducts);
                categoryFilters.forEach(btn => btn.classList.remove('bg-purple-300'));
                button.classList.add('bg-purple-300');
                sideMenu?.classList.add('-translate-x-full');
                foodSubmenu?.classList.add('hidden');
            }
        });
    });
}

// Subkategoriya filtrlari
if (subcategoryFilters) {
    subcategoryFilters.forEach(button => {
        button.addEventListener('click', () => {
            const subcategory = button.getAttribute('data-subcategory');
            const filteredProducts = productData.filter(product => product.subcategory === subcategory);
            displayProducts(filteredProducts);
            categoryFilters.forEach(btn => btn.classList.remove('bg-purple-300'));
            subcategoryFilters.forEach(btn => btn.classList.remove('bg-purple-300'));
            button.classList.add('bg-purple-300');
            sideMenu?.classList.add('-translate-x-full');
            foodSubmenu?.classList.add('hidden');
        });
    });
}

// Food submenu toggle
if (foodToggle && foodSubmenu) {
    foodToggle.addEventListener('click', () => {
        foodSubmenu.classList.toggle('hidden');
    });
}

// Savat modalini ochish/yopish
if (cartLink) {
    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal?.classList.toggle('flex');
        cartModal?.classList.toggle('hidden');
    });
}

if (mobileCartLink) {
    mobileCartLink.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal?.classList.toggle('flex');
        cartModal?.classList.toggle('hidden');
    });
}

if (mobileMenuCartLink) {
    mobileMenuCartLink.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal?.classList.toggle('flex');
        cartModal?.classList.toggle('hidden');
        sideMenu?.classList.add('-translate-x-full');
    });
}

if (closeCart) {
    closeCart.addEventListener('click', () => {
        cartModal?.classList.add('hidden');
    });
}

// To‘lov modalini ochish
if (checkoutModal) {
    checkoutModal.addEventListener('click', () => {
        if (cart.length === 0) {
            alert(translations[currentLang]['empty-cart']);
        } else if (!firstNameInput?.value || !lastNameInput?.value || !paymentAddress?.value || !phoneInput?.value) {
            alert(translations[currentLang]['fill-all']);
        } else if (!phoneInput.value.match(/^\+998\d{9}$/)) {
            alert(translations[currentLang]['invalid-phone']);
        } else if (!smsCodeInput?.value || smsCodeInput.value !== generatedSMSCode) {
            alert(translations[currentLang]['invalid-sms-code']);
        } else {
            paymentModal?.classList.remove('hidden');
            cartModal?.classList.add('hidden');
        }
    });
}

if (closePayment) {
    closePayment.addEventListener('click', () => {
        paymentModal?.classList.add('hidden');
        cardPaymentForm?.classList.add('hidden');
        creditForm?.classList.add('hidden');
        confirmPaymentButton?.classList.add('hidden');
    });
}

// Profil modalini ochish/yopish
if (profileLink) {
    profileLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (profileFirstNameInput) profileFirstNameInput.value = profile.firstName;
        if (profileLastNameInput) profileLastNameInput.value = profile.lastName;
        if (profileAddressInput) profileAddressInput.value = profile.address;
        if (profilePhoneInput) profilePhoneInput.value = profile.phone;
        profileModal?.classList.toggle('flex');
        profileModal?.classList.toggle('hidden');
    });
}

if (mobileProfileLink) {
    mobileProfileLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (profileFirstNameInput) profileFirstNameInput.value = profile.firstName;
        if (profileLastNameInput) profileLastNameInput.value = profile.lastName;
        if (profileAddressInput) profileAddressInput.value = profile.address;
        if (profilePhoneInput) profilePhoneInput.value = profile.phone;
        profileModal?.classList.toggle('flex');
        profileModal?.classList.toggle('hidden');
    });
}

if (mobileMenuProfileLink) {
    mobileMenuProfileLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (profileFirstNameInput) profileFirstNameInput.value = profile.firstName;
        if (profileLastNameInput) profileLastNameInput.value = profile.lastName;
        if (profileAddressInput) profileAddressInput.value = profile.address;
        if (profilePhoneInput) profilePhoneInput.value = profile.phone;
        profileModal?.classList.toggle('flex');
        profileModal?.classList.toggle('hidden');
        sideMenu?.classList.add('-translate-x-full');
    });
}

if (closeProfile) {
    closeProfile.addEventListener('click', () => {
        profileModal?.classList.add('hidden');
    });
}

// Chek modalini yopish
if (closeReceipt) {
    closeReceipt.addEventListener('click', () => {
        receiptModal?.classList.add('hidden');
    });
}

// Yon menyuni ochish/yopish
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sideMenu?.classList.toggle('-translate-x-full');
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        sideMenu?.classList.add('-translate-x-full');
    });
}

// Desktop katalog tugmasi
if (catalogToggle) {
    catalogToggle.addEventListener('click', () => {
        sideMenu?.classList.toggle('-translate-x-full');
    });
}

// Modalni tashqariga bosish orqali yopish
[cartModal, paymentModal, receiptModal, profileModal].forEach(modal => {
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    }
});

// Escape tugmasi bilan modallarni yopish
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        [cartModal, paymentModal, receiptModal, profileModal, sideMenu].forEach(el => {
            if (el && !el.classList.contains('hidden')) {
                el.classList.add('hidden');
                if (el === sideMenu) {
                    el.classList.add('-translate-x-full');
                }
            }
        });
    }
});

// Dastlabki mahsulot ro‘yxati va til
updateLanguage(currentLang);
displayProducts(productData);