import { ContactUsInput } from "@/components/ContactUsInput";
import { ContactUsCheckbox } from "@/components/ContactUsCheckbox";
import { Button } from "@/components/Button";

export const ContactUsForm = () => {
  return (
    <form className="form">
      <ContactUsInput type={"text"} name={"name"} placeholder="Имя" />
      <ContactUsInput
        name={"tel"}
        type={"number"}
        placeholder={"Номер телефона"}
        required
      />
      <ContactUsInput
        name={"email"}
        type={"email"}
        placeholder={"E-mail"}
        required
      />
      <ContactUsInput
        name={"product"}
        type={"text"}
        placeholder={"Интересующий товар/услуга"}
      />
      <ContactUsInput name={"message"} placeholder={"Сообщение"} required />
      <ContactUsCheckbox
        label={
          "Отправляя заявку Вы соглашаетесь с политикой конфиденциальности"
        }
      />
      <Button text={"отправить"} isDark={true} type={"submit"} />
    </form>
  );
};
