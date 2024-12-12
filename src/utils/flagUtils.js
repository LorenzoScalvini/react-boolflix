export const getCountryFlag = (languageCode) => {
  const flags = {
    it: "🇮🇹",
    en: "🇬🇧",
    es: "🇪🇸",
  };
  return flags[languageCode] || languageCode;
};
