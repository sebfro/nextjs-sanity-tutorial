import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "vg4m2yv5",
    dataset: "production",
    apiVersion: "2022-05-09",
    useCdn: false,
  });

export const fetchByType = async <T>(type: string): Promise<T> => {
  return await client.fetch(`*[_type == "${type}"]`);
}