import axios, { AxiosResponse } from "axios";
import { Constants } from "../utils/constants/constants";
import payloads from "../utils/testdata/payloads.json";

describe("API Tests", (): void => {
  it("test get request", async (): Promise<void> => {
    const response: AxiosResponse<any, any> = await axios.get(
      `${Constants.BASE_URI}/posts/1`,
    );
    expect(response.status).toBe(200);
    expect(response.data.title).toBe(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    );
  });

  it("test post request", async (): Promise<void> => {
    const response: AxiosResponse<any, any> = await axios.post(
      `${Constants.BASE_URI}/posts`,
      payloads.createPost,
    );

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(payloads.createPost);
    expect(response.data.title).toBe("foo");
    expect(response.data.body).toBe("bar");
    expect(response.data.userId).toBe(1);
    expect(response.data.id).toBe(101);
  });

  it("test put request", async (): Promise<void> => {
    const response: AxiosResponse<any, any> = await axios.put(
      `${Constants.BASE_URI}/posts/1`,
    );
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
  });

  it("test delete request", async (): Promise<void> => {
    const response: AxiosResponse<any, any> = await axios.delete(
      `${Constants.BASE_URI}/posts/1`,
    );
    expect(response.status).toBe(200);
  });
});
