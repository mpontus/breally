import { either as E } from "fp-ts";
import { pipe } from "fp-ts/lib/function";
import * as t from "io-ts";
import { formatValidationErrors } from "io-ts-reporters";

export const getPagesResponseSchema = t.array(
  t.type({
    url: t.string,
    id: t.string,
  })
);

export const getPageResponseSchema = t.type({
  url: t.string,
  id: t.string,
  sections: t.array(
    t.union([
      t.type({
        type: t.literal("hero"),
        text: t.string,
        img: t.string,
      }),
      t.type({
        type: t.literal("testimonial"),
        text: t.string,
        author: t.string,
      }),
      t.type({
        type: t.literal("newsletter"),
      }),
    ])
  ),
});

export const postNewsletterResponseSchema = t.type({
  message: t.string,
});

export const errorResponseSchema = t.type({
  message: t.string,
});

export const decodeToPromise =
  <A, O, I>(validator: t.Type<A, O, I>) =>
  (input: I): Promise<A> =>
    pipe(
      validator.decode(input),
      E.fold(
        (errors) => Promise.reject(formatValidationErrors(errors)),
        (value) => Promise.resolve(value)
      )
    );
