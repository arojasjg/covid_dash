import { formatDateAsString } from "./utils";

export interface AppState {
  selectedDate?: string;
}

export const DEFAULT_APP_STATE: AppState = {
  selectedDate: formatDateAsString(new Date())
}
