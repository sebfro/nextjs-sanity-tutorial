import { createClient, groq } from "next-sanity";

export const client = createClient({
    projectId: "6hplvwaq",
    dataset: "production",
    apiVersion: "2022-05-09",
    useCdn: false,
  });

export const fetchAllByType = async <T>(type: string): Promise<T> => {
  return await client.fetch(groq`*[_type == "${type}"]`);
}
