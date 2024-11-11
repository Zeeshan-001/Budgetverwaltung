export const transactions = [
  {
    _id: 1726061728826,
    type: "expense",
    date: "2024-09-13",
    category: "Haus",
    note: "N/A",
    amount: 500,
  },
];

export const handleTransation = (item) => {
  transactions.unshift(item);
};
