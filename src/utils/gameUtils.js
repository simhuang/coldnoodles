import { gameWords } from "../constants/gameWords";

export const getGameWords = () => {
  return [];
};

/**
 * Util function to sanitize data and return it as an array
 */
export const snapshotDataToNative = snapshot => {
  const docs = snapshot.docs;
  return docs.map(doc => {
    return {
      name: doc.id
    };
  });
};
