export type FormField =
  | "plantName"
  | "plantSubtitle"
  | "plantType"
  | "price"
  | "discount"
  | "label"
  | "features"
  | "description";

export type FormErrors = {
  [key in FormField]?: string;
};

