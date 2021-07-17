export const CHANGE_NAME = 'CHANGE_NAME';

export function changeName(newName) {
  return {
    type: CHANGE_NAME,
    payload: { newName: newName },
  };
}
