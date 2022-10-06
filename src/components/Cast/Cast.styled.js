import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 0;
  justify-content: center;
  padding: 0;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3] * 6}px;

`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  margin:  10px;
`;

export const Li = styled.li`
  color: ${p => p.theme.colors.mainBackground};
  font-size: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.space[6] * 6}px;
  padding-bottom: ${p => p.theme.space[3] * 6}px;
  list-style: none;
  border: 1px solid #000;
  min-height: 622px;
  &.active {
    color: orange;
  }
`;