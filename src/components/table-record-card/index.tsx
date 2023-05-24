import { Record } from "../../types/record.type";
import RecordCard from "../record-card";

const TableRecord = ({ records }: { records: Array<Record> }) => {
  let d = records[0].date;
  return (
    <div>
      <ul>
        <li key={records[0].id}>
          <div className="flex items-center mt-2">
            <div className="w-full px-4 h-[2px] bg-blue-200" />
          </div>
          <RecordCard {...records[0]} isSameDay />
        </li>
        {records.map((item, index) => {
          const render =
            item.date.setHours(0, 0, 0, 0) != d.setHours(0, 0, 0, 0);
          d = item.date;
          if (index === 0) return;
          return (
            <li key={item.id}>
              {render && (
                <div className="flex items-center mt-10">
                  <div className="w-full px-4 h-[2px] bg-blue-200" />
                </div>
              )}
              <RecordCard {...item} isSameDay={render} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableRecord;
