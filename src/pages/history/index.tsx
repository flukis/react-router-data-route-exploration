import { useLoaderData } from "react-router-dom";
import { Record } from "../../types/record.type";
import TableRecord from "../../components/table-record-card";

export type HistoryPageProps = {
  records: Array<Record>;
};

const HistoryPage = () => {
  const { records } = useLoaderData() as HistoryPageProps;
  return (
    <>
      <section className="mt-12 p-3 rounded-lg border-2 border-gray-100 bg-gray-50">
        <TableRecord records={records} />
      </section>
    </>
  );
};

export default HistoryPage;
