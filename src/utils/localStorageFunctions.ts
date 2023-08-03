export interface CanvasData {
  colors: string[];
  selectedColor: string;
  sizeGrid: {
    rows: number;
    columns: number;
  };
  canvas: string[];
}

const localStorageKey = 'canvasData';

// Função para obter o estado do desenho do localStorage
export function getCanvasDataFromLocalStorage(): CanvasData | null {
  const data = localStorage.getItem(localStorageKey);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
    }
  }
  return null;
}

// Função para armazenar o estado do desenho no localStorage
export function setCanvasDataToLocalStorage(canvasData: CanvasData): void {
  try {
    const data = JSON.stringify(canvasData);
    localStorage.setItem(localStorageKey, data);
  } catch (error) {
    console.error('Error storing data in localStorage:', error);
  }
}
