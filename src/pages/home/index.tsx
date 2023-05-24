import { Link, useLoaderData } from "react-router-dom";
import { FormatCurrencyToIdr } from "../../utils/formatter.utils";
import { Summary } from "../../types/summary.type";
import { Record } from "../../types/record.type";
import TableRecord from "../../components/table-record-card";

export type HomePageProps = {
  summary: Summary;
  lastRecord: Array<Record>;
};

const HomePage = () => {
  const { summary, lastRecord } = useLoaderData() as HomePageProps;
  return (
    <>
      <section className="rounded-lg border border-gray-300 bg-gray-50 p-3">
        <h2
          id="summary-balance"
          className="mb-2 flex items-center text-xl font-semibold text-gray-600"
        >
          Balance
        </h2>
        <span
          id="summary-balance-value"
          aria-describedby="summary-balance"
          className="text-xl font-normal font-mono text-gray-700"
        >
          {FormatCurrencyToIdr(summary.balance)}
        </span>
        <div className="h-[2px] my-4 bg-gray-200" />
        <div className="flex sm:flex-row flex-col">
          <div className="w-full">
            <h2 className="mb-2 text-base font-semibold flex items-center text-gray-600">
              <div
                id="summary-expenses"
                className="w-3 h-3 rounded-full bg-red-300 mr-3"
              />
              Expense
            </h2>
            <span
              id="summary-expenses-value"
              aria-describedby="summary-expense"
              className="text-xl font-normal font-mono text-gray-700"
            >
              {FormatCurrencyToIdr(summary.expense)}
            </span>
          </div>
          <div className="w-full sm:mt-0 mt-4">
            <h2 className="mb-2 text-base font-semibold flex items-center text-gray-600">
              <div
                id="summary-incomes"
                className="w-3 h-3 rounded-full bg-sky-300 mr-3"
              />
              Incomes
            </h2>
            <span
              id="summary-incomes-value"
              aria-describedby="summary-incomes"
              className="text-xl font-normal font-mono text-gray-700"
            >
              {FormatCurrencyToIdr(summary.income)}
            </span>
          </div>
        </div>
      </section>

      <section className="mt-12 p-3 rounded-lg border border-gray-300 bg-gray-50">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-gray-600">Last Records</h2>
          <Link
            className="mb-4 hover:underline focus:ring-4 px-2 py-1 rounded-lg text-blue-500 font-semibold text-base"
            to="/history"
          >
            See All →
          </Link>
        </div>
        <TableRecord records={lastRecord} />
      </section>
    </>
  );
};

export default HomePage;
