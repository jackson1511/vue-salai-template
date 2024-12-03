import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        greeting: 'Hello',
        switchLanguage: 'Switch Language'
    },
    kh: {
        greeting: 'សួស្តី',
        switchLanguage: 'ប្តូរភាសា'
    }
    // Add other languages here
};

// Get the language from localStorage or default to 'en'
const storedLocale = localStorage.getItem('locale') || 'en';

const i18n = createI18n({
    legacy: false, // Use Composition API mode
    locale: 'en', // Default language
    messages
});

export default i18n;
