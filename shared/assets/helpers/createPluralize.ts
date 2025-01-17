export const createPluralize = (locale: string) => {
  const rules = new Intl.PluralRules(locale);

  return (count: number) => {
    return rules.select(count);
  };
};
export const pluralizeRu = createPluralize("ru");
export const pluralizeEn = createPluralize("en");
