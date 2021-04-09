const remoteURL = 'http://localhost:5002';

export const getAllLocations = () => {
  return fetch(`${ remoteURL }/locations`)
    .then(res => res.json());
};

export const deleteLocation = (id) => {
  return fetch(`${ remoteURL }/locations/${ id }`, {
    method: "DELETE"
  }).then(res => res.json());
};

export const getLocationById = (locationId) => {
  return fetch(`${ remoteURL }/locations/${ locationId }`)
    .then((res) => res.json());
};

export const addLocation = (newLoc) => {
  return fetch(`${ remoteURL }/locations`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newLoc)
  }).then(res => res.json());
};