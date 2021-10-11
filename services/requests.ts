//&location=
//&company=
//&category=

export const getList = async (
  URL: string,
  page: string,
  location: string = ""
) => {
  const response = await fetch(`${URL}/jobs?page=${page}${location}`);
  const data = await response.json();
  return data;
};

export const getOne = async (URL: string, id: string) => {
  const response = await fetch(`${URL}/jobs/${id}`);
  const job = await response.json();
  return job;
};
