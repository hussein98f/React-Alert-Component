import { ReactNode } from "react";

export type TAlertTypes = "upgrade" | "note" | "error" | "sucssus" | "warning";

export interface IAlert {
  type: TAlertTypes;
  title: string;
  children: ReactNode;
}
