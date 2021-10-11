export type Job = {
  id: number;
  categories: any[];
  company: Company;
  contents: string;
  levels: any[];
  locations: any[];
  model_type: string;
  name: string;
  publication_date: string;
};

type Company = {
  id: number;
  name: string;
  short_name: string;
};
