export const ContactUsInput = ({ name, type, placeholder = "", required }) => {
  return (
    <input
      className="form__input"
      name={name}
      type={type}
      placeholder={required ? `${placeholder} *` : placeholder}
    />
  );
};
