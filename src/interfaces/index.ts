interface priceItem {
  id: number;
  origem: string;
  destino: string;
  price: number;
}

export interface pricesData {
  data: priceItem[];
}
