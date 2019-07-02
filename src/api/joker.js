import { fetch } from 'whatwg-fetch';

export async function RandomJoker(count) {
  const cnt = count || 10;
  const response = await fetch(`/api/random?count=${cnt}`);
  const result = await response.json();
  console.log(result);
  if (result.code !== 0) {
    throw new Error(`get random joker fail with ${result.code}`);
  } else {
    return result.data;
  }
}

export async function GetJokerById(id) {
  const response = await fetch(`/api/joker/${id}`);
  const result = await response.json();
  if (result.code !== 0) {
    throw new Error('get joker error');
  } else {
    return result.data;
  }
}
