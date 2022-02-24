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

export interface extendedData extends pricesData {
  formikValues: formikValueProps;
}

export interface resultProps extends formikValueProps {
  discountedPrice: number;
  defaultPrice: number;
  id: string;
}
