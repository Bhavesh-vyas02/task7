// DOM elements
const userContainer = document.getElementById('userContainer');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const reloadBtn = document.getElementById('reloadBtn');
const retryBtn = document.getElementById('retryBtn');

// API URL
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// State management
let usersData = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    reloadBtn.addEventListener('click', () => {
        fetchUsers();
        reloadBtn.querySelector('i').style.animation = 'spin 1s linear infinite';
        setTimeout(() => {
            reloadBtn.querySelector('i').style.animation = '';
        }, 1000);
    });
    
    retryBtn.addEventListener('click', fetchUsers);
}

// Show loading state
function showLoading() {
    loadingSpinner.style.display = 'block';
    errorMessage.style.display = 'none';
    userContainer.style.display = 'none';
}

// Show error state
function showError(message) {
    loadingSpinner.style.display = 'none';
    errorMessage.style.display = 'block';
    userContainer.style.display = 'none';
    errorText.textContent = message;
}

// Show success state
function showUsers() {
    loadingSpinner.style.display = 'none';
    errorMessage.style.display = 'none';
    userContainer.style.display = 'grid';
}

// Fetch users from API
async function fetchUsers() {
    try {
        showLoading();
        
        // Add a small delay to show loading state
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }
        
        const users = await response.json();
        
        if (!Array.isArray(users) || users.length === 0) {
            throw new Error('No users found or invalid data format');
        }
        
        usersData = users;
        displayUsers(users);
        showUsers();
        
    } catch (error) {
        console.error('Error fetching users:', error);
        
        let errorMsg = 'Failed to load user data. ';
        
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            errorMsg += 'Please check your internet connection and try again.';
        } else if (error.message.includes('HTTP Error')) {
            errorMsg += `Server error: ${error.message}`;
        } else {
            errorMsg += error.message || 'An unexpected error occurred.';
        }
        
        showError(errorMsg);
    }
}

// Generate user initials for avatar
function getUserInitials(name) {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .slice(0, 2)
        .join('');
}

// Format address for display
function formatAddress(address) {
    const { street, suite, city, zipcode } = address;
    return `${street}${suite ? ', ' + suite : ''}<br>${city}, ${zipcode}`;
}

// Create user card HTML
function createUserCard(user) {
    const initials = getUserInitials(user.name);
    const formattedAddress = formatAddress(user.address);
    
    return `
        <div class="user-card">
            <div class="user-header">
                <div class="user-avatar">${initials}</div>
                <div class="user-info">
                    <h3>${user.name}</h3>
                    <span class="username">@${user.username}</span>
                </div>
            </div>
            
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span><a href="mailto:${user.email}">${user.email}</a></span>
                </div>
                
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span><a href="tel:${user.phone}">${user.phone}</a></span>
                </div>
                
                <div class="contact-item">
                    <i class="fas fa-globe"></i>
                    <span><a href="http://${user.website}" target="_blank" rel="noopener">${user.website}</a></span>
                </div>
                
                ${user.company ? `
                <div class="contact-item">
                    <i class="fas fa-building"></i>
                    <span>${user.company.name}</span>
                </div>
                ` : ''}
            </div>
            
            <div class="address-info">
                <h4><i class="fas fa-map-marker-alt"></i>Address</h4>
                <div class="address-details">
                    ${formattedAddress}
                </div>
            </div>
        </div>
    `;
}

// Display users in the container
function displayUsers(users) {
    if (!users || users.length === 0) {
        userContainer.innerHTML = '<p class="no-users">No users to display</p>';
        return;
    }
    
    const userCards = users
        .map(user => createUserCard(user))
        .join('');
    
    userContainer.innerHTML = userCards;
    
    // Add animation to cards
    const cards = userContainer.querySelectorAll('.user-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Search functionality (bonus feature)
function searchUsers(query) {
    if (!query.trim()) {
        displayUsers(usersData);
        return;
    }
    
    const filteredUsers = usersData.filter(user => 
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase())
    );
    
    displayUsers(filteredUsers);
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchUsers,
        displayUsers,
        getUserInitials,
        formatAddress,
        searchUsers
    };
}