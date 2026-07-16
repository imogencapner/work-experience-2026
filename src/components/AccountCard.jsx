import styled, { css } from "styled-components";

const looks = {
  primary: css`
    color: white;
    background: color: #0A2540;
  `,
};

const Wrapper = styled.article`
  display: grid;
  gap: 1rem;
    height: ${({ height }) => height ?? "190px"};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadow};
  background: #0A2540;

  ${({ variant = "primary" }) => looks[variant]}
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Balance = styled.strong`
  align-self: end;
  font-size: 2rem;
`;

const Muted = styled.span`
  opacity: 0.76;
`;

export function AccountCard({ name, number, balance, change, variant, height }) {
  return (
    <Wrapper variant={variant} height={height}>
      <TopLine>
        <strong>{name}</strong>
        <Muted>•• {number}</Muted>
      </TopLine>
      <Balance>{balance}</Balance>
      <Muted>{change}</Muted>
    </Wrapper>
  );
}


