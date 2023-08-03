export const ContactUsCheckbox = ({ label }) => {
  return (
    <div className="form_checkbox">
      <input name={"checkbox"} type={"checkbox"} id={"checkbox"} />
      <label className="form_label" htmlFor="checkbox">
        {label}
      </label>
    </div>
  );
};
