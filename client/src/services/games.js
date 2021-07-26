import api from "./api-config";

export const getGames = async () => {
  const resp = await api.get("/games");
  return resp.data;
};

export const getGame = async (id) => {
  const resp = await api.get(`/games/${id}`);
  return resp.data;
};

export const postGame = async (gameData) => {
  const resp = await api.post("/games", { game: gameData });
  return resp.data;
};
