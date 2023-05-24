import { faker } from "@faker-js/faker";
import { Summary } from "../types/summary.type";
import { Record } from "../types/record.type";
const expenseCategories = [
  "Groceries",
  "Transportation",
  "Dining Out",
  "Utilities",
  "Rent",
  "Entertainment",
  "Travel",
  "Healthcare",
  "Education",
  "Other",
];

function generateFakeSummaryData(): Summary {
  const balance = Number(
    faker.finance.amount({ min: 10000, max: 500000, dec: 0 })
  );
  const income = Number(
    faker.finance.amount({ min: 10000, max: 500000, dec: 0 })
  );
  const expense = Number(
    faker.finance.amount({ min: 10000, max: 500000, dec: 0 })
  );

  return {
    balance,
    income,
    expense,
  };
}

function generateFakeRecordHomeData(): Record {
  const id = faker.number.int();
  const isExpenses = faker.datatype.boolean();
  const categoryName =
    expenseCategories[
      faker.number.int({ min: 0, max: expenseCategories.length - 1 })
    ];
  const note = faker.lorem.sentence();
  const date = faker.date.between({
    from: "2023-03-01T00:00:00.000Z",
    to: "2023-05-03T00:00:00.000Z",
  });
  const amount = Number(
    faker.finance.amount({ min: 10000, max: 500000, dec: 0 })
  );

  return {
    id,
    categoryName,
    note,
    date,
    amount,
    isExpenses,
  };
}

export const seederHomePage = (num: number) => {
  const records: Array<Record> = [];
  Array.from({ length: num }, () => {
    records.push(generateFakeRecordHomeData());
  });
  records.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return {
    summary: generateFakeSummaryData(),
    lastRecord: records,
  };
};

export const seederHistoryPage = (num: number) => {
  const records: Array<Record> = [];
  Array.from({ length: num }, () => {
    records.push(generateFakeRecordHomeData());
  });
  records.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return {
    records,
  };
};
