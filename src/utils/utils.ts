import { AuthData, DataGame, DataGames } from '../types/types';

// eslint-disable-next-line global-require
const dataGames = require('../data/games.json') as DataGames;

const getUserIdFromCookie = () => {
  const cookiesArray: Array<string[]> = [];
  document.cookie.split('=').join().replace(/ /g, '').split(';')
    .forEach((element: string) => {
      cookiesArray.push(element.split(','));
    });
  const userId = cookiesArray.filter((item: string[]) => item[0] === 'ssid');
  return userId;
};

export function getElement(
  selector: string,
  parent: Element | Document = document,
): HTMLElement {
  const element = parent.querySelector(selector);
  if (!(element instanceof HTMLElement)) {
    throw new Error(`${selector} search error!`);
  }
  return element;
}

export function randomInteger(min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function getDataGame(id: number): DataGame {
  const data = dataGames.games.find((el) => el.id === id);
  if (data === undefined) throw new Error('Invalid game id');
  return data;
}

export function shuffle<T>(array: T[]) {
  if (array.length === 3) {
    const arraySort = array.sort(() => Math.random() - 0.5);
    // eslint-disable-next-line no-param-reassign
    array = Array.from(arraySort);
  }
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(randomInteger(0, i - 1));
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i += 1) {
    color += letters[randomInteger(0, 15)];
  }
  return `#${color}`;
}

// export const baseUrl = 'http://localhost:5000';
export const baseUrl = 'https://api.leoniuk.dev';

export const submitForm = async (objValues: AuthData) => {
  const path = (Object.keys(objValues).length === 2) ? 'login' : 'registration';
  try {
    const result = await fetch(`${baseUrl}/${path}`, {
      method: 'POST',
      body: JSON.stringify(objValues),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return result;
  } catch (error) {
    console.log({ message: 'server connection error' });
  }
  return new Response();
};

export const isAuthenticated = async () => {
  const userId = getUserIdFromCookie();
  try {
    const result = await fetch(`${baseUrl}/check-registration`, {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(userId)),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await result.json();
  } catch (error) {
    console.log({ message: 'server connection error' });
  }
  return JSON.stringify({ message: 'server connection error' });
};

export const getUserData = async () => {
  const userId = getUserIdFromCookie();
  try {
    const result = await fetch(`${baseUrl}/get-user`, {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(userId)),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await result.json();
  } catch (error) {
    console.log({ message: 'getting user-data error' });
  }
  return JSON.stringify({ message: 'getting user-data error' });
};

const url = https://ipgeolocation.abstractapi.com/v1/?api_key=27bfb85db8cf4689be8261415948b3dd';

export const httpGetAsync = async () => {
  const apiEndpoint = process.env.API_URL;
  const secretKey = process.env.API_KEY;
  try {
    const result = fetch(url, {});
    const response = await result;
    return await response.json();
  } catch (error) {
    console.error(`Fetch error:, ${error}`);
  }
  return JSON.stringify({ message: 'IP server no respond' });
};

export const isUserCheck = await isAuthenticated();
