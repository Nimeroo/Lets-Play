import api from "./api-config"

export const getReplies = async () => {
    const resp = await api.get("/replies");
    return resp.data;
  };
  
  export const postReply = async (commentData) => {
    const resp = await api.post("/comments/:comment_id/replies", {
      comment: commentData,
    });
    return resp.data;
  };
  
  export const putReply = async (id, commentData) => {
    const resp = await api.put(`/replies/${id}`, { comment: commentData });
    return resp.data;
  };
  
  export const deleteReply = async (id) => {
    const resp = await api.delete(`/replies/${id}`);
    return resp;
  };