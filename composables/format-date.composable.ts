import dayjs from "dayjs";

export function useFormatDate(dateString: string): string {
  return `${dayjs(dateString).format("dddd - DD/MM/YYYY")}`;
}
