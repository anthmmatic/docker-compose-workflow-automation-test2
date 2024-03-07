import axios from 'axios';
import { expect, it } from 'vitest';

it('should ping server', async () => {
  const response = await axios.get('http://localhost:3000');

  const txt = response.data;

  expect(txt).toBe('Hello Hono!');
});
