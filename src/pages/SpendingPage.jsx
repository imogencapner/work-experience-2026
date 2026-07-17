import { AccountCard, Main } from "../components";
import { SpendingChart } from "./SpendingChart";
import { LinkText } from "./TransactionsPage";

export function SpendingPage() {
  return (
    <Main>
      <div style={{ marginBottom: "16px" }}>
        <AccountCard
          name="Savings Amount"
          balance="£2,619"
        />
        <SpendingChart />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <LinkText onClick={() => (window.location.href = "/")}>
          Back to homepage
        </LinkText>
      </div>
    </Main>
  );
}