import type { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../entities/user.entity';

interface CreateUserDto {
  name: string;
}

export async function createUser(request: Request, response: Response) {
  const { name } = request.body as CreateUserDto;

  const privateKey = Math.random().toString(36).substr(2, 9); // Not Permanent

  const user = await getRepository(User).save({
    name,
    privateKey,
  });

  return response.json(user);
}
