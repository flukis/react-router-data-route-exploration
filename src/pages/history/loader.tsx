import { HistoryPageProps } from ".";
import { seederHistoryPage } from "../../seeds/generate-data";

export async function HistoryPageLoader(): Promise<HistoryPageProps> {
  await sleep();
  return seederHistoryPage(10);
}

function sleep(n = 500) {
  return new Promise((r) => setTimeout(r, n));
}
