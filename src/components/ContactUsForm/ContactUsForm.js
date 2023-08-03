import { ContactUsInput } from "@/components/ContactUsInput";
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
      <textarea
        className="form_textArea"
        name={"message"}
        placeholder={"Сообщение *"}
        required
      />
      <Button text={"отправить"} isDark={true} type={"submit"} />
    </form>
  );
};
