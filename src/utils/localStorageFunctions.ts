import { listColor } from './randomColor'; 

export interface CanvasData {
  colors: string[];
  selectedColor: string;
  rows: number;
  columns: number;
  canvas: string[];
}

const initialCanvasData = {
  colors: listColor(),
  selectedColor: 'black',
  rows: 5,
  columns: 5,
  canvas: Array.from({ length: 5 * 5 }, () => 'white'),
};

const localStorageKey = 'canvasData';

// Função para obter o estado do desenho do localStorage
export function getCanvasDataFromLocalStorage(): CanvasData {
  const data = localStorage.getItem(localStorageKey);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
    }
  }
  return initialCanvasData; // Retornar initialCanvasData apenas se não houver dados salvos no localStorage
}

// Função para armazenar o estado do desenho no localStorage
export function setCanvasDataToLocalStorage(canvasData: CanvasData) {
  try {
    const data = JSON.stringify(canvasData);
    localStorage.setItem(localStorageKey, data);
  } catch (error) {
    console.error('Error storing data in localStorage:', error);
  }
}
