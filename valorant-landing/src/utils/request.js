import { encodeData } from './encodeData';
import { client } from './client';
import { AxiosError } from 'axios'

export async function userLogin({ e, p }) {
  try {
    const { data } = await client.post('api/v1/cms/do-login', JSON.stringify(encodeData({ e, p })));
    return data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error((error.response?.data?.msg) ?? 'Ha ocurrido un error, por favor intenta más tarde')
    if (error instanceof Error) throw new Error(error.message)
    throw new Error('Ha ocurrido un error, por favor intenta más tarde')
  }
}

export async function userRegister({
  fn,
  dt,
  dn,
  em,
  op,
  pn,
  op_pol,
  op_mkt,
  emo,
  tko
}) {
  try {
    const { data } = await client.post('api/v1/save-user', JSON.stringify(encodeData({ fn, dt, dn, em, op, pn, op_pol, op_mkt, emo, tko})));
    return data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error((error.response?.data?.msg) ?? 'Ha ocurrido un error, por favor intenta más tarde')
    if (error instanceof Error) throw new Error(error.message)
    throw new Error('Ha ocurrido un error, por favor intenta más tarde')
  }
}

export async function userCheckOtp({ em, o }) {
  try {
    const { data } = await client.post('api/v1/check-otp', JSON.stringify(encodeData({ em, o })));
    return data;
  } catch (error) {
    if (error instanceof AxiosError) throw new Error((error.response?.data?.msg) ?? 'Ha ocurrido un error, por favor intenta más tarde')
    if (error instanceof Error) throw new Error(error.message)
    throw new Error('Ha ocurrido un error, por favor intenta más tarde')
  }
}