import { createClient, groq } from "next-sanity";

const projectId = "6hplvwaq";
const dataset = "production";
const apiVersion = "2022-05-09";

export const apiUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`;

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
});

export const fetchAllByType = async <T>(type: string): Promise<T> => {
	return await client.fetch(groq`*[_type == "${type}"]`);
};

export const fetchAllByTypeWithFilter = async <T>(type: string, filterName: string, filterValue: string): Promise<T> => {
	return await client.fetch(groq`*[_type == "${type}" && ${filterName} match "*${filterValue}*"]`);
};

export const fetchAllByTypeAndReference = async <T>(type: string, refType: string, refId: string): Promise<T> => {
	return await client.fetch(groq`*[_type == "${type}" && references(*[_type == "${refType}" && _id == "${refId}"]._id)]`);
};
