import type { Context } from "hono";
import { StatusCodes } from "http-status-codes";
import { CustomError } from "../lib/errors.js";
import type { ContentfulStatusCode } from "hono/utils/http-status";

export async function errorMiddleware(err: Error, c: Context) {
  
  // Type guard to check if error is instance of CustomError
  if (err instanceof CustomError) {
    return c.json(
      { message: err.message }, 
      err.status as ContentfulStatusCode
    );
  }

  // Default error response for non-custom errors
  return c.json(
    { message: "Internal Server Error" },
    StatusCodes.INTERNAL_SERVER_ERROR
  );
}