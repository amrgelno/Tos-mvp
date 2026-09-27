import i18n from "i18next"
import {initReactI18next } from "react-i18next"; 
import dataAr from "./languages/Ar.json"
import dataEn from "./languages/En.json"
import LanguageDetector from "i18next-browser-languagedetector";

function getLanguage() {
  return localStorage.getItem('selectedLanguage') || 'en'; // Varsayılan dil 'en' (İngilizce)
}

const selectedLanguage = getLanguage();
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: selectedLanguage,
    fallbackLng: "en",
    returnObjects:true,
    resources: {
      ar: {
        translation: dataAr
      },
      en: {
        translation: dataEn
      },
    },
    

    interpolation: {
      escapeValue: false
    }
  });