import { getLang } from "../constants/index";
import { useTranslation } from "react-i18next"


export const useT = () => {
  const { t } = useTranslation();
  return { t, lang: getLang() }
}