import styled from "styled-components";

const Chart = styled.div`
  display: grid;
  gap: 0.9rem;
`;

const Row = styled.div`
  display: grid;
  gap: 0.35rem;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 700;
`;

const Track = styled.div`
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.border};
`;

const Fill = styled.div`
  width: ${({ value }) => value}%;
  height: 100%;
  background: ${({ color }) => color};
`;

function SpendingChart() {
  const spending = [
    { category: "Food", amount: 80, color: "#FF6384" },
    { category: "Transport", amount: 55, color: "#36A2EB" },
    { category: "Entertainment", amount: 35, color: "#FFCE56" },
    { category: "Other", amount: 20, color: "#2E9E63" },
  ];

  return (
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
  );
}

export default SpendingChart;