export type Notification = {
  id: number;
  label: string;
  icon: "mail" | "tool";
  enabled: boolean;
};