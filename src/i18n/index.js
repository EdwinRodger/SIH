// i18n initialization using i18next and react-i18next
// This file sets up language resources and default language.
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '../locales/en/common.json'
import hi from '../locales/hi/common.json'

// Human-friendly language names used by the switcher
export const supportedLanguages = {
    en: 'English',
    hi: 'हिन्दी',
}

// Initialize i18next
void i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            hi: { translation: hi },
        },
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
