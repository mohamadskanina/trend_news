/**
 * Callback Handler - Trend News App Website
 * Handles OAuth callback URLs from Telegram and Twitter APIs
 * 
 * This script processes authorization callbacks from:
 * - Telegram API: https://trendnews.example.com/auth/callback?token=...
 * - Twitter API: https://trendnews.example.com/auth/callback?code=...
 */

(function() {
    'use strict';

    /**
     * Parse URL Parameters
     * Extracts query parameters from the current URL
     */
    function getUrlParameters() {
        const params = new URLSearchParams(window.location.search);
        const urlParams = {};
        
        for (const [key, value] of params.entries()) {
            urlParams[key] = value;
        }
        
        return urlParams;
    }

    /**
     * Process Authorization Callback
     * Handles different types of OAuth callbacks
     */
    function processCallback() {
        const params = getUrlParameters();
        const hash = window.location.hash.substring(1); // Remove # symbol
        const hashParams = hash ? Object.fromEntries(new URLSearchParams(hash)) : {};

        // Check for Telegram callback (token in query params)
        if (params.token) {
            handleTelegramCallback(params.token);
            return;
        }

        // Check for Twitter callback (code in query params)
        if (params.code) {
            handleTwitterCallback(params.code, params.state);
            return;
        }

        // Check for hash-based callbacks (common in some OAuth flows)
        if (hashParams.access_token) {
            handleHashCallback(hashParams);
            return;
        }

        // Check for error parameters
        if (params.error) {
            handleCallbackError(params.error, params.error_description);
            return;
        }

        // If no callback parameters, show default success message
        console.log('Callback page loaded - waiting for authorization parameters');
    }

    /**
     * Handle Telegram API Callback
     * Processes Telegram OAuth token
     */
    function handleTelegramCallback(token) {
        console.log('Telegram callback received');
        
        // Store token securely (in production, use secure storage)
        // For web: localStorage or sessionStorage
        // For mobile: Secure keychain storage
        
        try {
            // Validate token format (basic check)
            if (token && token.length > 10) {
                // In production, exchange token with backend
                // For now, store in sessionStorage as example
                sessionStorage.setItem('telegram_token', token);
                
                // Update UI to show success
                updateCallbackStatus('Telegram authorization successful!', 'success');
                
                // Redirect to app after 2 seconds
                setTimeout(() => {
                    redirectToApp('telegram');
                }, 2000);
            } else {
                throw new Error('Invalid token format');
            }
        } catch (error) {
            console.error('Error processing Telegram callback:', error);
            updateCallbackStatus('Authorization failed. Please try again.', 'error');
        }
    }

    /**
     * Handle Twitter API Callback
     * Processes Twitter OAuth code
     */
    function handleTwitterCallback(code, state) {
        console.log('Twitter callback received');
        
        try {
            // Validate code
            if (!code || code.length < 10) {
                throw new Error('Invalid authorization code');
            }

            // Store code temporarily (in production, exchange immediately)
            sessionStorage.setItem('twitter_code', code);
            if (state) {
                sessionStorage.setItem('twitter_state', state);
            }

            // Update UI
            updateCallbackStatus('Twitter authorization successful!', 'success');

            // In production, exchange code for access token via backend
            // For now, redirect to app
            setTimeout(() => {
                redirectToApp('twitter');
            }, 2000);
        } catch (error) {
            console.error('Error processing Twitter callback:', error);
            updateCallbackStatus('Authorization failed. Please try again.', 'error');
        }
    }

    /**
     * Handle Hash-based Callback
     * Processes OAuth callbacks that use URL hash fragments
     */
    function handleHashCallback(hashParams) {
        console.log('Hash-based callback received');
        
        try {
            if (hashParams.access_token) {
                sessionStorage.setItem('oauth_token', hashParams.access_token);
                
                if (hashParams.token_type) {
                    sessionStorage.setItem('token_type', hashParams.token_type);
                }
                
                updateCallbackStatus('Authorization successful!', 'success');
                
                setTimeout(() => {
                    redirectToApp('oauth');
                }, 2000);
            }
        } catch (error) {
            console.error('Error processing hash callback:', error);
            updateCallbackStatus('Authorization failed. Please try again.', 'error');
        }
    }

    /**
     * Handle Callback Errors
     * Displays error messages from OAuth providers
     */
    function handleCallbackError(error, errorDescription) {
        console.error('OAuth error:', error, errorDescription);
        
        let errorMessage = 'Authorization failed.';
        
        if (error === 'access_denied') {
            errorMessage = 'Authorization was denied. Please try again.';
        } else if (error === 'invalid_request') {
            errorMessage = 'Invalid authorization request. Please contact support.';
        } else if (errorDescription) {
            errorMessage = errorDescription;
        }
        
        updateCallbackStatus(errorMessage, 'error');
    }

    /**
     * Update Callback Status
     * Updates the UI to show success or error status
     */
    function updateCallbackStatus(message, type) {
        const callbackMessage = document.querySelector('.callback-message');
        const successIcon = document.querySelector('.success-icon');
        
        if (callbackMessage) {
            callbackMessage.textContent = message;
        }
        
        if (successIcon && type === 'error') {
            successIcon.style.color = '#ef4444';
            successIcon.innerHTML = `
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            `;
        }
    }

    /**
     * Redirect to App
     * Redirects user back to the mobile app or web app
     */
    function redirectToApp(provider) {
        // In production, use deep linking or custom URL scheme
        // Example: trendnews://auth/callback?provider=telegram
        // Or redirect to web app dashboard
        
        const redirectUrl = sessionStorage.getItem('redirect_url') || '/public/index.html';
        
        // Clear temporary storage
        sessionStorage.removeItem('redirect_url');
        
        // Redirect
        window.location.href = redirectUrl;
    }

    /**
     * Initialize Callback Handler
     * Runs when the page loads
     */
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', processCallback);
        } else {
            processCallback();
        }
    }

    // Initialize on page load
    init();

    // Export functions for testing (if needed)
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            getUrlParameters,
            handleTelegramCallback,
            handleTwitterCallback,
            processCallback
        };
    }

})();

