export type home = {
	currentSubscription: currentSubscription;
	owner?: owner | null;
	consumption?: consumption | null;
};

export type consumption = {
	nodes: [
		{
			from: string;
			to: string;
			cost: number | null;
			unitPrice: number | null;
			unitPriceVAT: number | null;
			consumption: number | null;
			consumptionUnit: string | null;
			currency: string | null;
		}
	];
};

export type currentSubscription = {
	priceInfo: {
		current: {
			total: number;
			energy: number;
			tax: number;
			startsAt: string;
		};
	};
};

export type owner = {
	firstName: string;
	lastName: string;
	contactInfo: {
		email: string;
		mobile: string | null;
	};
};

export type TibberHomes = {
	data: {
		viewer: {
			homes: home[];
		};
	};
};
