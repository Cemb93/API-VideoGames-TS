import { ActionsTypes, BACK } from "./Action-Types"

export const getAllGames = () => async (dispatch: any): Promise<void> => {
  try {
    const data = fetch(BACK.games).then((res: any) => res.json());
    dispatch({
      type: ActionsTypes.GET_ALL_GAMES,
      payload: data,
    })
  } catch (error) {
    console.log('Error en getAllGames por:', error)
  }
}