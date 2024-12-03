<template>
    <div>
        <!-- <p>{{ $t('greeting') }}</p> -->
        <Button label="" @click="toggleLanguage">
            {{ $t('greeting') }}
        </Button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Check the current language on component mount
const currentLanguage = ref(locale.value);

// Switch between languages and store the selection in localStorage
const toggleLanguage = () => {
    const newLang = locale.value === 'en' ? 'kh' : 'en'; // Toggle between English and French
    locale.value = newLang;
    currentLanguage.value = newLang;

    // Store the selected language in localStorage
    localStorage.setItem('locale', newLang);
};
</script>
