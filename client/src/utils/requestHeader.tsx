import { token } from '../config/token'

// export const getToken = (): string | null => localStorage.getItem('token')
export const getToken = (): string | null => token

export const requestHeader = (options: object| null ): object => ({
  headers: {
    // Authorization: `Bearer ${localStorage.getItem('token')}`,
    Authorization: `Bearer ${getToken()}`,
    // 'Access-Control-Allow-Origin': '*', 
    ...options,
  },
})

export const requestHeaderWithoutToken = (): object => ({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})
// export const getToken = (): string | null => localStorage.getItem('token')
