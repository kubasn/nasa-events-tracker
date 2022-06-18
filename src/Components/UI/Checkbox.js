import React, { useState } from "react";
import styled from "styled-components";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.checked);

  const { value } = props;
  const { id } = props;
  const { name } = props;

  const onChangeFunction = () => {
    let newChecked = !checked;
    setChecked(newChecked);
    props.onChange(newChecked, value);
  };

  return (
    <Check
      type="checkbox"
      value={value}
      id={id}
      name={name}
      checked={checked}
      onChange={onChangeFunction}
    ></Check>
  );
};

const Check = styled.input`
  position: absolute;
  right: 5px;
`;

export default Checkbox;
