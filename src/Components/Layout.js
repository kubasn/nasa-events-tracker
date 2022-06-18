import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <Schema>
      <Component>
        {props.menu}
        {props.content}
      </Component>
      {props.footer}
    </Schema>
  );
};

const Schema = styled.div``;
const Component = styled.div`
  min-height: calc(100vh - 100px);
`;
export default Layout;
