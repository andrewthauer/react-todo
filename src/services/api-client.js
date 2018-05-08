import { sleep } from '../utils';

const BASE_URL = 'http://localhost:8099';

export const getItems = () => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/items`)
      .then(res => res.json())
      .then(result => sleep(1000)
        .then(() => resolve(result)))
      .catch(reject)
  })
}
