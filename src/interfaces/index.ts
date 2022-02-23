export interface priceItem {
  id: number;
  origem: string;
  destino: string;
  price: number;
}

export interface pricesData {
  data: priceItem[];
}

export interface formikValueProps {
  originValue: string;
  destinationValue: string;
  planValue: string;
  minutsValue: number;
}
