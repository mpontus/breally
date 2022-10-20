import * as t from "io-ts";
import {
  decodeToPromise,
  getPageResponseSchema,
  getPagesResponseSchema,
  postNewsletterResponseSchema,
} from "./schema";

export interface Credentials {
  username: string;
  password: string;
}

export type GetPagesResponse = t.TypeOf<typeof getPagesResponseSchema>;
export type GetPageResponse = t.TypeOf<typeof getPageResponseSchema>;
export type PostNewsletterResponse = t.TypeOf<
  typeof postNewsletterResponseSchema
>;

export class ApiClient {
  constructor(
    private readonly baseUrl: string,
    private readonly credentials: Credentials
  ) {}

  getPages(): Promise<GetPagesResponse> {
    return this.request("GET", "/pages").then(
      decodeToPromise(getPagesResponseSchema)
    );
  }

  getPage(id: string): Promise<GetPageResponse> {
    return this.request("GET", `/page/${id}/`).then(
      decodeToPromise(getPageResponseSchema)
    );
  }

  postNewsletter(email: string) {
    return this.request("GET", "/newsletter", { email }).then(
      decodeToPromise(postNewsletterResponseSchema)
    );
  }

  private async request(
    method: string,
    url: string,
    body?: unknown
  ): Promise<unknown> {
    const options = {
      method,
      body: body !== undefined ? JSON.stringify(body) : undefined,
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            this.credentials.username + ":" + this.credentials.password
          ).toString("base64"),
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);

    return await response.json();
  }
}
