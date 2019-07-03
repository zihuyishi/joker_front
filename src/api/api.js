export function Get(path) {
  return fetch(path).then(response => response.json());
}

export function Post(path, data) {
  return fetch(path, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  }).then(response => response.json());
}
