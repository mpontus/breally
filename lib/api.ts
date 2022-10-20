import * as t from "io-ts";
import {
  decodeToPromise,
  errorResponseSchema,
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
  ) {
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  }

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
    return this.request("POST", "/newsletter", { email }).then(
      decodeToPromise(postNewsletterResponseSchema)
    );
  }

  private async request(
    method: string,
    path: string,
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

    const response = await fetch(this.baseUrl + path, options);

    if (200 > response.status || response.status >= 300) {
      throw await response
        .json()
        .then(decodeToPromise(errorResponseSchema))
        .then(
          ({ message }) => new Error(message),
          () => new Error(`Invalid response status: ${response.status}`)
        );
    }

    return await response.json();
  }
}
