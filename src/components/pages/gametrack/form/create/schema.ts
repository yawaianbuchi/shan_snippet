import { z } from 'zod';

export const CREATEGAMETRACK_SCHEMA = z.object({
  operatorname: z.string(),
  url: z.string().url(),
  username: z.string(),
  password: z.string().min(8).max(15),
  merchantcode: z.string(),
  // vpn: z.boolean(),
});
