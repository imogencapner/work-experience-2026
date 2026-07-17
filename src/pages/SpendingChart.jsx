import styled from "styled-components";

const ChartContainer = styled.div`
  background: ${({ theme }) => theme.colors.background || "#ffffff"};
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h3`
  margin: 0 0 1.2rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text || "#222"};
`;

const Chart = styled.div`
  display: grid;
  gap: 1.2rem;
`;

const Row = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.muted || "#666"};
  font-weight: 700;
  font-size: 0.95rem;
`;

const Track = styled.div`
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: #e8e8e8;
`;

const Fill = styled.div`
  width: ${({ value }) => value}%;
  height: 100%;
  border-radius: 999px;
  background: ${({ color }) => color};
  transition: width 0.4s ease;
`;

function SpendingChart() {
  const spending = [
    { category: "Food", amount: 80, color: "#FF6384" },
    { category: "Transport", amount: 55, color: "#36A2EB" },
    { category: "Entertainment", amount: 35, color: "#FFCE56" },
    { category: "Other", amount: 20, color: "#2E9E63" },
  ];

  return (
    <ChartContainer>
      <Title>Spending Insights</Title>

      <Chart>
        {spending.map((item) => (
          <Row key={item.category}>
            <Label>
              <span>{item.category}</span>
              <span>{item.amount}%</span>
            </Label>

            <Track>
              <Fill value={item.amount} color={item.color} />
            </Track>
          </Row>
        ))}
      </Chart>
    </ChartContainer>
  );
}

export default SpendingChart;