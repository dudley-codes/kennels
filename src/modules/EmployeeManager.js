const remoteURL = 'http://localhost:5002';

export const getEmployeeById = (employeeId) => {
  return fetch(`${ remoteURL }/employees/${ employeeId }?_expand=location`);
};

export const getAllEmployees = () => {
  return fetch(`${ remoteURL }/employees`)
    .then(res => res.json());
};