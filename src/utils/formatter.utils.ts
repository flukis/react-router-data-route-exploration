export const FormatCurrencyToIdr = (num: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(num);
};

const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const FormatDate = (d: Date) => {
  if (isToday(d)) return "Hari ini";
  if (isYesterday(d)) return "Kemarin";
  return `${d.getDate()} ${monthNames[d.getMonth()]}`;
};

function isToday(date: Date) {
  const now = new Date();

  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
}
function isYesterday(date: Date) {
  if (!(date instanceof Date)) {
    throw new Error('Invalid argument: you must provide a "date" instance');
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  );
}
