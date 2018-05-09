import { sleep } from 'utils';

const BASE_URL = 'http://localhost:3001';

export interface TodoItem {
  id: number;
  title: string;
  description: string;
}

export function getItems(): Promise<TodoItem[]> {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/items`)
      .then(res => res.json())
      .then(result => sleep(1000)
        .then(() => resolve(result  as TodoItem[])))
      .catch(reject);
  });
}
