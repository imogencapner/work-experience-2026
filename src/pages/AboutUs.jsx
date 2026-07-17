import { AccountCard, Main } from "../components";
import { LinkText } from "./TransactionsPage";

export function AboutUsPage() {
  return (
    <Main>
      <AccountCard
        height="150px"
        balance="About Us"
      />

      <div
        style={{
          marginTop: "2rem",
          maxWidth: "850px",
          marginInLIne: "auto"
         
        }}
      >

        <h2>Who We Are</h2>
        <p>
          Welcome to SecureBank. We are committed to helping individuals and
          businesses achieve their financial goals through reliable, secure,
          and innovative banking services.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide simple, transparent, and accessible banking
          solutions that empower our customers to manage their finances with
          confidence.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>Secure current and savings accounts</li>
          <li>Fast money transfers</li>
          <li>Personal and business banking</li>
          <li>Online and mobile banking</li>
          <li>24/7 customer support</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Bank-level security and encryption</li>
          <li>Transparent fees</li>
          <li>Easy-to-use online banking</li>
          <li>Friendly customer support</li>
        </ul>

        <div style={{ marginTop: "2rem" }}>
          <LinkText onClick={() => (window.location.href = "/")}>
            Back to homepage
          </LinkText>
        </div>
      </div>
    </Main>
  );
}