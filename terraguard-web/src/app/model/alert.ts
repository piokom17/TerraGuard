export interface Alert {
  code: string;
  type: 'alert' | 'quiz' | 'danger';
  title: string;
  text?: string;
  actions?: AlertAction[];
  choices?: AlertAction[];
  withMap?: boolean;
}

export interface AlertAction {
  title?: string;
  text?: string;
  caption?: string;
  navigateTo?: number[];
  switchMapTo?: '2d' | '3d';
  points?: number;
  cost?: number;
  alert?: string;
  changes?: number[];
}
