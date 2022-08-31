  export interface DataModel {
    data: ListDataModel[];
    success?: boolean;
    message?: string;
    errors?: any;
  }
  export interface ListDataModel {
    name: string;
    type: string;
    id: number;
    status: string;
    nextduedate: string;
    amount: string;
    invoiceUrl: null;
  }

