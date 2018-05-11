import { sleep } from '@app/utils';

const BASE_URL = 'http://localhost:3001';

export interface Todo {
  id: number;
  title: string;
  description?: string;
  tags: string[];
}

export function getItems(): Promise<Todo[]> {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/items`)
      .then(res => res.json())
      .then(result => sleep(1000)
        .then(() => resolve(result  as Todo[])))
      .catch(reject);
  });
}
