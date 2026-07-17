import { AccountCard, Main, Navbar } from "../components";
import AccountCardSection from "./AccountCardSection";
import { Card } from "./card";

export function HomePage() {
  return (
    <Main
      aria-label="Student workspace"
      style={{
        background: "#F3F4F6",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Navbar bankName="Bank" />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >

        {/* Welcome Section */}
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "0.5rem",
            }}
          >
            Good Afternoon, Name. 👋
          </h1>

          <p
            style={{
              color: "#6B7280",
              fontSize: "1.15rem",
            }}
          >
            Here's an overview of your finances today.
          </p>
        </div>


        {/* Bank Card */}
        <div
          style={{
            background: "white",
            padding: "1rem",
            borderRadius: "24px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
            marginBottom: "2rem",
          }}
        >
          <Card />
        </div>


        {/* Money Overview */}
        <h2
          style={{
            fontSize: "1.7rem",
            color: "#111827",
            marginBottom: "1rem",
          }}
        >
          Money Overview
        </h2>


        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >

          <AccountCard
            name="Current Balance"
            balance="£11,900"
          />

          <AccountCard
            name="Savings Amount"
            balance="£2,619"
          />

          <AccountCard
            name="Spending"
            balance="Average of £2,009/month"
          />

        </div>


        {/* Financial Overview */}
        <div
          style={{
            marginTop: "3rem",
          }}
        >

          <h2
            style={{
              fontSize: "1.7rem",
              color: "#111827",
              marginBottom: "1.5rem",
            }}
          >
            Financial Overview
          </h2>


          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >

            <div
              style={{
                background: "#FFFFFF",
                padding: "1.5rem",
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
              }}
            >
              <h3>Monthly Income</h3>
              <h2>£3,200</h2>
              <p style={{ color: "#2E9E63" }}>
                ↑ 5% this month
              </p>
            </div>


            <div
              style={{
                background: "#FFFFFF",
                padding: "1.5rem",
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
              }}
            >
              <h3>Money Available</h3>
              <h2>£3,891</h2>
              <p style={{ color: "#36A2EB" }}>
                Available to spend
              </p>
            </div>


            <div
              style={{
                background: "#FFFFFF",
                padding: "1.5rem",
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
              }}
            >
              <h3>Upcoming Payments</h3>
              <h2>£240</h2>
              <p style={{ color: "#FFCE56" }}>
                Due this month
              </p>
            </div>

          </div>

        </div>


        {/* Accounts */}
        <div
          style={{
            marginTop: "3rem",
            background: "white",
            padding: "2rem",
            borderRadius: "24px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
          }}
        >

          <h2
            style={{
              fontSize: "1.8rem",
              color: "#111827",
              marginBottom: "1.5rem",
            }}
          >
            Accounts
          </h2>

          <AccountCardSection />

        </div>


      </div>
    </Main>
  );
}