import { FC } from "react";
import { Record } from "../../types/record.type";
import { FormatCurrencyToIdr, FormatDate } from "../../utils/formatter.utils";

type RecordSameDay = {
  isSameDay: boolean;
};

const RecordCard: FC<Record & RecordSameDay> = ({
  date,
  categoryName,
  note,
  amount,
  isExpenses,
  isSameDay,
}) => {
  return (
    <div className="flex border-t border-blue-100 justify-between items-center pt-2 pb-3">
      <div className="w-3/4">
        {isSameDay && (
          <time className="text-right text-xs font-semibold text-blue-600">
            {FormatDate(date)}
          </time>
        )}
        <h4 className="mb-1 text-base font-semibold flex items-center text-gray-600">
          {categoryName}
        </h4>
        <p className="text-sm font-normal text-gray-600">{note}</p>
      </div>
      <div className="flex flex-col">
        <p
          className={`font-mono font-medium mb-1 ${
            isExpenses ? "text-red-800" : "text-blue-800"
          }`}
        >
          {FormatCurrencyToIdr(amount)}
        </p>
      </div>
    </div>
  );
};

export default RecordCard;
