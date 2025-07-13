import axios, { AxiosResponse } from "axios";

describe("API Tests", (): void => {
  it("test get request", async (): Promise<void> => {
    const response: AxiosResponse<any, any> = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    expect(response.status).toBe(200);
    expect(response.data.title).toBe(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    );
  });

  it("test post request", async (): Promise<void> => {
    const response: AxiosResponse<any, any> = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
    );
    expect(response.status).toBe(201);
    expect(response.data.id).toBe(101);
  });

  it("test put request", async (): Promise<void> => {
    const response: AxiosResponse<any, any> = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
  });

  it("test delete request", async (): Promise<void> => {
    const response: AxiosResponse<any, any> = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    expect(response.status).toBe(200);
  });
});
