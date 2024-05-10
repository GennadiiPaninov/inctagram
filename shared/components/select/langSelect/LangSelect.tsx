import { Select } from "@/shared/components";
import { useRouter } from "next/router";
import { useIsMobile } from "@/shared/assets/hooks";
import { MOBILE_BREAKPOINT } from "@/shared/assets/constants";

export const LangSelect = () => {
  const { asPath, locale, pathname, push, query } = useRouter();
  const isMobile = useIsMobile(MOBILE_BREAKPOINT);

  const changeLangHandler = (key: string, value: string) => {
    const locale = value;

    push({ pathname, query }, asPath, { locale });
  };

  const options = [
    {
      img: "/images/FlagUK.svg",
      title: "English",
      value: "en",
    },
    {
      img: "/images/FlagRussia.svg",
      title: "Russian",
      value: "ru",
    },
  ];

  return (
    <div>
      <Select
        defaultValue={locale}
        isHiddenText={isMobile}
        items={options}
        onChange={changeLangHandler}
      />
    </div>
  );
};
