import { HomePageProps } from ".";
import { seederHomePage } from "../../seeds/generate-data";

export async function HomePageLoader(): Promise<HomePageProps> {
  await sleep();
  return seederHomePage(5);
}

function sleep(n = 500) {
  return new Promise((r) => setTimeout(r, n));
}
