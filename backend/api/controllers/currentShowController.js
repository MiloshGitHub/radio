import { getCurrentShow } from '../models/currentShowModel.js';

export const fetchCurrentShow = async (req, res) => {
  const show = await getCurrentShow();
  // Return only the name (as per your frontend) but you could include isLive if needed
  res.json({ name: show.name });
};
