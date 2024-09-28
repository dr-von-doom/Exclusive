const env = process.env.NODE_ENV;

const baseURL =
  env === "development"
    ? "http://localhost:3000"
    : "https://exclusive-be.onrender.com";

/** Api methods */
export enum apiMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

/**
 * It replaces the path params in the path
 *
 * @param {string} path - path to be replaced
 * @param {object} pathParams - path params to be replaced
 * @returns it replaces the path params in the path
 */
export const replacePathParams = (
  path: string,
  pathParams?: Record<string, string>,
) => {
  if (!pathParams) return path;

  return Object.entries(pathParams).reduce(
    (acc, [key, value]) => acc.replace(`:${key}`, value),
    path,
  );
};

/**
 * It makes a request to the API
 *
 * @param {string} route route to be called
 * @param {apiMethods} method method to be used
 * @param {object} options
 * @param {object} options.headers headers to be sent
 * @param {object} options.body body to be sent
 * @param {object} options.pathParams path params to be replaced
 * @param {object} options.queryParams query params to be sent
 *
 * @returns response
 */
export const requestApi = async (
  route: string,
  method: apiMethods,
  options: {
    headers?: Record<string, string>;
    body?: Record<string, unknown> | string;
    pathParams?: Record<string, string>;
    queryParams?: Record<string, string>;
  },
) => {
  const body = options.body ? JSON.stringify(options.body) : undefined;
  const queryParams = options.queryParams
    ? new URLSearchParams(options.queryParams).toString()
    : "";

  const isFormData = options.body instanceof FormData;

  route = options.pathParams
    ? replacePathParams(route, options.pathParams)
    : route;

  const response = await fetch(`${baseURL}/${route}?${queryParams}`, {
    method,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
    },
    body: body,
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(
      JSON.stringify({
        status: response.status,
        message: errorMessage ?? "An error occurred",
      }),
    );
  }

  return response.json();
};
