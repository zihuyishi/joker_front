import { Get } from './api';

export async function RandomJoker(count) {
  const cnt = count || 10;
  const result = await Get(`/api/random?count=${cnt}`);
  if (result.code !== 0) {
    throw new Error(`get random joker fail with ${result.code}`);
  } else {
    return result.data;
  }
}

export async function GetJokerById(id) {
  const result = await Get(`/api/joker/${id}`);
  if (result.code !== 0) {
    throw new Error('get joker error');
  } else {
    return result.data;
  }
}
