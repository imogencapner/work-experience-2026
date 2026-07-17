import { AccountCard, Main } from "../components";
import { SpendingChart } from "./SpendingChart";
import { LinkText } from "./TransactionsPage";


export function SpendingPage() {
  return (
    <Main>
    <div
      style={{
        marginBottom: "20px",
        background:
          "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
        borderRadius: "28px",
        padding: "24px",
        boxShadow:
          "0 20px 50px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(15, 23, 42, 0.04)",
        border: "1px solid rgba(148, 163, 184, 0.18)",
        transition: "all 0.3s ease",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 28px 60px rgba(15, 23, 42, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 20px 50px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(15, 23, 42, 0.04)";
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "180px",
          height: "180px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 700,
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Spending Overview
          </h2>

          <p
            style={{
              margin: "6px 0 0",
              fontSize: "14px",
              color: "#64748b",
            }}
          >
            Track your monthly spending habits
          </p>
        </div>

        <div
          style={{
            background: "#eff6ff",
            color: "#2563eb",
            padding: "8px 12px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          This Month
        </div>
      </div>

      <AccountCard
        name="Savings Amount"
        balance="£2,619"
      />

      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          borderRadius: "20px",
          background:
            "linear-gradient(180deg, rgba(248,250,252,0.8), rgba(255,255,255,0.9))",
          border: "1px solid rgba(226,232,240,0.8)",
        }}
      >
        <SpendingChart />
      </div>
    </div>
      <div style={{ marginTop: "1rem" }}>
        <LinkText onClick={() => (window.location.href = "/")}>
          Back to homepage
        </LinkText>
      </div>
    </Main>
  );
}