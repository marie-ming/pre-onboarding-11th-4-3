import request from '.';

export const getSickList = async (params: string) => {
  if (!params) return;

  const response = await request.get('/sick', { params: { q: params } });
  return response.data;
};
