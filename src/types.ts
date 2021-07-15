import { formatDateAsString } from "./utils";

export class AppState {
  public selectedDate?: string;
}

export const DEFAULT_APP_STATE: AppState = {
  selectedDate: formatDateAsString(new Date())
}
