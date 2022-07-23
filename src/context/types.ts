type TotalProps = {
  id: string;
  name: string;
  value: number
}

type ItemAttachmentProps = {
  content: object;
  name: null;
}

type CategoriesProps = {
  id: number;
  name: string;
}

type DimensionProps = {
  cubicweight: number;
  height:number;
  length:number;
  weight: number;
  width: number
}

type AdditionalInfoProps = {
  brandName: string;
  brandId: string;
  categoriesIds: string;
  categories: Array<CategoriesProps>;
  productClusterId: string;
	commercialConditionId: string;
  dimension: DimensionProps;
  offeringInfo: null;
	offeringType: null;
  offeringTypeId: null;
}

type SellingPricesProps = {
  value: number;
  quantity: number;
}

type PriceDefinitionProps = {
  sellingPrices: Array<SellingPricesProps>;
  calculatedSellingPrice: number;
	total: number
}

type ItemProps = {
        uniqueId: string;
				id: string;
				productId: string;
				ean: string;
				lockId: string;
        itemAttachment: ItemAttachmentProps;
        attachments: [];
				quantity: number;
				seller: string;
				name: string;
				refId: null;
				price: number;
				listPrice: number;
				manualPrice: null;
				priceTags: [];
				imageUrl: string;
				detailUrl: string;
				components: [];
				bundleItems: [];
				params: [];
				offerings: [];
				sellerSku: string;
				priceValidUntil: null;
				commission: number;
				tax: number;
				preSaleDate: null;
        additionalInfo: AdditionalInfoProps;
        measurementUnit: string;
				unitMultiplier: number;
				sellingPrice: number;
				isGift: boolean;
				shippingPrice: null;
				rewardValue: number;
				freightCommission: number;
        priceDefinition: PriceDefinitionProps;
        taxCode: null;
				parentItemIndex: null;
				parentAssemblyBinding: null;
				callCenterOperator: null;
				serialNumbers: null;
				assemblies: [];
				costPrice: number;
}

type ClientProfileDataProps = {
      id: string;
			email: string;
			firstName: string;
			lastName: string;
			documentType: string;
			document: string;
			phone: string;
			corporateName: null;
			tradeName: null;
			corporateDocument: null;
			stateInscription: null;
			corporatePhone: null;
			isCorporate: boolean;
			userProfileId: string;
			customerClass: null
}

type RatesAndBenefitsDataProps = {
  id: string;
  rateAndBenefitsIdentifiers: [];
}

type AddressProps = {
  addressType: string;
  receiverName: string;
  addressId: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: null;
  reference: null;
  geoCoordinates: Array<number>;
}

type ShppingDataProps = {
  id: string
  address: AddressProps;
}

type PickupStoreInfoProps = {
  additionalInfo: null;
	address: null;
	dockId: null;
  friendlyName: null;
  isPickupStore: boolean
}

type SlasProps = {
  id: string,
  name: string,
  shippingEstimate: string,
  deliveryWindow: null,
  price: number,
  deliveryChannel: string,
  pickupStoreInfo: PickupStoreInfoProps;
  polygonName: string;
	lockTTL: string;
  pickupPointId: null;
  transitTime: string;
}

type  DeliveryIdsProps = {
  courierId: string;
	courierName: string;
	dockId: string;
	quantity: number;
	warehouseId: string;
	accountCarrierName: string;
}


type LogisticsInfoProps = {
    itemIndex: number;
	  selectedSla: string;
	  lockTTL: string;
		price: number;
		listPrice: number;
		sellingPrice: number;
		deliveryWindow: null;
		deliveryCompany: string;
		shippingEstimate: string;
		shippingEstimateDate: string;
    slas: SlasProps;
    shipsTo: Array<string>;
    deliveryIds: DeliveryIdsProps;
    deliveryChannel: string,
    pickupStoreInfo: PickupStoreInfoProps;
    
}

type OrderProps = {
  orderId: string;
  sequence: string;
  marketplaceOrderId: string;
  sellerOrderId: string;
  origin: string;
  affiliateId: string;
  salesChannel: string;
  merchantName: null;
  status: string;
  statusDescription: string;
  value: number;
  creationDate: string;
  lastChange: string;
  orderGroup: string;
  totals: Array<TotalProps>;
  items: Array<ItemProps>;
  marketplaceItems: [];
  clientProfileData: ClientProfileDataProps;
  giftRegistryData: null;
	marketingData: null;
  ratesAndBenefitsData: RatesAndBenefitsDataProps;
  shippingData: ShppingDataProps;
  logisticsInfo: LogisticsInfoProps;
}

export type { OrderProps };