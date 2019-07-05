import { Get, Post } from './api';

export async function Login(name, password) {
  const result = await Post('/api/login', {
    name,
    password,
  });
  if (result.code !== 0) {
    throw new Error(`login error with ${result.code}`);
  } else {
    return result.data;
  }
}

export async function Logout() {
  const result = await Post('/api/logout', {});
  if (result.code !== 0) {
    throw new Error(`logout error with ${result.code}`);
  }
}

export async function UserById(id) {
  const result = await Get(`/api/user/${id}`);
  if (result.code !== 0) {
    throw new Error(`get user fail with ${result.code}`);
  } else {
    return result.data;
  }
}
