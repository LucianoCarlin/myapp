import axios, { AxiosError, AxiosResponse } from 'axios';
import { parseCookies, setCookie } from 'nookies';

let isRefreshing = false;

export function getAPIClient(ctx?: any) {
  const cookies = parseCookies(ctx);
  const token = cookies['nextauth.token'];
  const refreshToken = cookies['nextauth.refreshToken'];
  console.log('deu');
  const api = axios.create({
    baseURL: process.env.HOST,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(api, 'api');
  api.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        if (error.response.data === 'token.expired') {
          if (!isRefreshing) {
            isRefreshing = true;

            try {
              const response = await api.patch('auth/refresh', {
                refreshToken,
              });
              const newToken = response.data.token;

              setCookie(ctx, 'nextauth.token', newToken, {
                maxAge: 60 * 60 * 9, // 9 hours
                path: '/',
              });

              // Use um tipo assert para garantir que error.config não seja nulo
              (error.config as any).headers = {
                ...error?.config?.headers,
                Authorization: `Bearer ${newToken}`,
              };
            } catch (err) {
              if (process.browser) {
                /*  signOut() */
              }
            } finally {
              isRefreshing = false;
            }
          }

          // Refaça a solicitação após a atualização do token
          if (error.config) {
            return axios(error.config);
          }
        } else {
          return Promise.reject('');
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
}
