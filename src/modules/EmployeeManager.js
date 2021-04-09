const remoteURL = 'http://localhost:5002';

// export const getEmployeeById = (employeeId) => {
//   return fetch(`${ remoteURL }/employees/${ employeeId }?_expand=location`);
// };

export const getAllEmployees = () => {
  return fetch(`${ remoteURL }/employees`)
    .then(res => res.json());
};

export const fireEmployee = (id) => {
  return fetch(`${ remoteURL }/employees/${ id }`, {
    method: "DELETE"
  }).then(result => result.json());
};

export const hireEmployee = (newHire) => {
  return fetch(`${ remoteURL }/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newHire)
  }).then(res => res.json());
};

export const getEmployeeById = (id) => {
  return fetch(`${ remoteURL }/employees/${ id }?_expand=location`)
    .then(res => res.json());
};

export const updateEmployee = (editedEmployee) => {
  return fetch(`${ remoteURL }/employees/${ editedEmployee.id }`, {
    method: "PUT",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(editedEmployee)
  }).then(data => data.json());
};