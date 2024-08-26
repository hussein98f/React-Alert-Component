import { ReactNode } from "react";
import { TAlertTypes } from "../Types";

export interface IAlert {
  type: TAlertTypes;
  title: string;
  children: ReactNode;
}
