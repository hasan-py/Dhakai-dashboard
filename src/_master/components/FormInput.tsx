import React from "react";

function FormInput(props: any) {
  const { value, name, label, placeholder, type, onChange, className } = props;
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input
        {...props}
        name={name}
        required
        value={value}
        className={
          className
            ? className
            : "px-4 py-2 my-2 border border-gray-200 rounded focus:outline-none"
        }
        placeholder={placeholder || "Type here"}
        type={type || "text"}
        onChange={(e) => onChange(e)}
      />
    </>
  );
}

export default FormInput;
