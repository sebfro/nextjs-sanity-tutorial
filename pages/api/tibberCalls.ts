import { graphql, buildSchema } from "graphql";
import axios, { AxiosResponse } from "axios";
import { TIBBER_API_TOKEN } from "../../Constants/tokens";
import { TibberHomes } from "../../types/TIbberApiTypes";

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const TibberAPI = "https://api.tibber.com/v1-beta/gql";

export const root = { hello: () => "Hello world!" };

export const temp = async () => {
	return graphql({schema, source: "{ hello }", rootValue: root}).then((response) => {
		console.log(response);
		return response;
	});
};

const consumption = "consumption(resolution: DAILY, last: 10) { nodes { from to cost unitPrice unitPriceVAT consumption consumptionUnit currency } }";
const owner = "owner { firstName lastName contactInfo { email mobile }}";
const currentSubscription = "currentSubscription {priceInfo {current {total energy tax startsAt }}}";
const schemaTibber = `{ "query": "{viewer {homes  { ${consumption} ${owner} ${currentSubscription} }}}" }`;



export const getTibberInfo = async () => {
	// return graphql({schema: schemaTibber, source: TibberAPI, rootValue: root}).then((response) => {
	// 	console.log(response);
	// 	return response;
	// });
	return await axios.post(TibberAPI, schemaTibber, {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${TIBBER_API_TOKEN}`
		}
	}).then(({data, status}: AxiosResponse<TibberHomes>) => {
		if (status === 200) {
			console.log("--------------------------------------");
			console.log(data);
			console.log(data.data.viewer.homes[0].currentSubscription.priceInfo);
			console.log(data.data);
			return data.data.viewer.homes;
		}
	}).catch((err) => {
		console.log(err);
		return err;
    
	});
};
