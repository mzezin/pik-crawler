import { get, post } from 'axios';

import { login, password, propertyId } from './config';

const getToken = async (login, password) => {
  const { data: { token } } = await post('https://api.pik.ru/v1/auth', { login, password });
  return token;
};

const getPropertyStatus = async () => {
  const token = await getToken(login, password);
  const { data } = await get('https://api.pik.ru/v1/opportunity/log', { params: { opportunity_id: propertyId }, headers: { token } });
  return data[5].status;
};

export default getPropertyStatus;
