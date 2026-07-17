import { AccountCard, TransactionList } from "../components";
import { transactions } from "../data/bankingData";
import { Main } from "../components";
import styled from "styled-components";

export const LinkText = styled.button`
  color: white;
  font-weight: 700;
  text-decoration: none;
  background:  #0A2540;
  padding: 4px;
  cursor: pointer:
`;


export function TransactionsPage() {
  return <Main>
  
    <AccountCard
    height="150px"
    balance="Transactions"/>
   
    <div style={{marginTop: "1rem"}}>
    <TransactionList 
    transactions={transactions}
    />
    </div>

    <div style={{marginTop: "1rem"}}>
      <LinkText onClick={() => window.location.href="/"}>Back to homepage</LinkText>
    </div>
  </Main>;
}