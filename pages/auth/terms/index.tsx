import { Back } from "@/features";
import { useTranslation } from "@/shared/assets/hooks";
import { HeadMeta, PageTitle } from "@/shared/components";
import { getLayout } from "@/shared/components/layout/baseLayout/BaseLayout";
import {
  InformationText,
  InformationTextBlock,
  InformationTitle,
} from "@/widgets";

import s from "@/pages/auth/policy/policy.module.scss";

const TermsOfService = () => {
  const { t } = useTranslation();
  const arrow = t.signUp.back;

  const information = [
    "Текстовой информации",
    "Фотоматериалов",
    "Ссылок на материалы, размещенные на других сайтах",
  ];

  const userRights = [
    "осуществлять поиск информации на сайте",
    "получать информацию на сай",
    "создавать информацию для сайта",
    "распространять информацию на сайте",
    "комментировать контент, выложенный на сайте",
    "копировать информацию на другие сайты с указанием источника",
    "копировать информацию на другие сайты с разрешения правообладателя",
    "использовать информацию сайта в личных некоммерческих целях",
    "использовать информацию сайта в коммерческих целях с разрешения правообладателей",
  ];

  const administrationRights = [
    "по своему усмотрению и необходимости создавать, изменять, отменять правила",
    "ограничивать доступ к любой информации на сайте",
    "создавать, изменять, удалять информацию",
    "удалять учетные записи",
    "отказывать в регистрации без объяснения причин",
  ];

  const userResponsibilities = [
    "обеспечить достоверность предоставляемой информации",
    "обновлять Персональные данные, предоставленные при регистрации, в случае их изменения",
    "не распространять информацию, которая направлена на пропаганду войны, разжигание национальной, расовой или религиозной ненависти и вражды, а также иной информации, за распространение которой предусмотрена уголовная или административная ответственность",
    "не нарушать работоспособность сайта",
    "не создавать несколько учётных записей на Сайте, если фактически они принадлежат одному и тому же лицу",
    "не совершать действия, направленные на введение других Пользователей в заблуждение",
    "не передавать в пользование свою учетную запись и/или логин и пароль своей учетной записи третьим лицам",
    "не регистрировать учетную запись от имени или вместо другого лица за исключением случаев, предусмотренных законодательством РФ",
    "не размещать материалы рекламного, эротического, порнографического или оскорбительного характера, а также иную информацию, размещение которой запрещено или противоречит нормам действующего законодательства РФ",
    "не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия с Сайтом и его Сервисами",
  ];
  const administrationResponsibilities = [
    "поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от Администрации причинам.",
    "осуществлять разностороннюю защиту учетной записи Пользователя",
    "защищать информацию, распространение которой ограничено или запрещено законами путем вынесения предупреждения либо удалением учетной записи пользователя, нарушившего правила",
    "предоставить всю доступную информацию о Пользователе уполномоченным на то органам государственной власти в случаях, установленных законом",
  ];

  const generalResponsibility = [
    "пользователь лично несет полную ответственность за распространяемую им информацию",
    "администрация не несет никакой ответственности за достоверность информации, скопированной из других источников",
    "администрация не несёт ответственность за несовпадение ожидаемых Пользователем и реально полученных услуг",
    "администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами",
    "в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т. д.)",
  ];

  return (
    <div className={s.wrapper}>
      <HeadMeta title={"Terms of Service"} />
      <Back className={s.back} text={arrow} />
      <PageTitle
        className={s.title}
        textAlign={"center"}
        title={t.signUp.service}
      />

      <InformationText
        text={
          "Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует\n" +
          "отношения между inctagram (далее inctagram или Администрация) с одной\n" +
          "стороны и пользователем сайта с другой. Сайт inctagram не является\n" +
          "средством массовой информации."
        }
      />

      <InformationText
        text={"Используя сайт, Вы соглашаетесь с условиями данного соглашения."}
      />

      <InformationTitle
        isSubTitle
        text={
          "Если Вы не согласны с условиями данного соглашения, не используйте сайт inctagram!"
        }
      />

      <InformationTextBlock
        options={information}
        subTitle={
          "Администрация предоставляет пользователю право на размещение на сайте следующей информации:"
        }
        title={"Предмет соглашения"}
      />

      <InformationTextBlock
        options={userRights}
        subTitle={"Пользователь имеет право:"}
        title={"Права и обязанности сторон"}
      />

      <InformationTextBlock
        options={administrationRights}
        subTitle={"Администрация имеет право:"}
      />

      <InformationTextBlock
        options={userResponsibilities}
        subTitle={"Пользователь обязуется:"}
      />

      <InformationTextBlock
        options={administrationResponsibilities}
        subTitle={"Администрация обязуется:"}
      />

      <InformationTextBlock
        options={generalResponsibility}
        title={"Ответственность сторон"}
      />

      <InformationText
        text={
          " Администрация не гарантирует сохранность информации, размещённой\n" +
          "Пользователем, а также бесперебойную работу информационного ресурса"
        }
      />

      <InformationTitle text={"Условия действия Соглашения"} />
      <InformationText
        text={
          "Данное Соглашение вступает в силу при любом использовании данного " +
          "сайта. Соглашение перестает действовать при появлении его новой " +
          "версии. Администрация оставляет за собой право в одностороннем " +
          "порядке изменять данное соглашение по своему усмотрению. При " +
          "изменении соглашения, в некоторых случаях, администрация может " +
          "оповестить пользователей удобным для нее способом."
        }
      />
    </div>
  );
};

TermsOfService.getLayout = getLayout;
export default TermsOfService;
