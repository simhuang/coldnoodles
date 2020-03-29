import { words } from "../constants/gameWords";

export const generateRandomNumber = maxNumber => {
  return Math.floor(Math.random() * maxNumber);
};

/**
 * Generate random game words for a game
 */
export const generateGameWords = () => {
  const specificGameWords = [];
  const usedIndices = [];
  for (let i = 0; i < 25; i++) {
    usedIndices.push(-1);
    let randomIndex = -1;
    while (usedIndices.includes(randomIndex)) {
      randomIndex = generateRandomNumber(402);
    }
    usedIndices.push(randomIndex);
    specificGameWords.push(words[randomIndex]);
  }
  return specificGameWords;
};

/**
 * This is a array representing the blue/red/neutral/bomb
 */
export const generateKeyMap = () => {
  const alreadyMappedIndices = [];
  const keyMap = [];
  alreadyMappedIndices.push(-1);
  // initialize keymap to empty values
  for (let i = 0; i < 25; i++) {
    keyMap.push("");
  }

  // generate red indices
  for (let i = 0; i < 8; i++) {
    let randomIndex = -1;
    while (alreadyMappedIndices.includes(randomIndex)) {
      randomIndex = generateRandomNumber(25);
    }
    alreadyMappedIndices.push(randomIndex);
    keyMap[randomIndex] = "RED";
  }

  // generate bomb index
  let bombRandomIndex = -1;
  while (alreadyMappedIndices.includes(bombRandomIndex)) {
    bombRandomIndex = generateRandomNumber(25);
  }
  alreadyMappedIndices.push(bombRandomIndex);
  keyMap[bombRandomIndex] = "BOMB";

  // generate neutral cards
  for (let i = 0; i < 7; i++) {
    let neutralRandomIndex = -1;
    while (alreadyMappedIndices.includes(neutralRandomIndex)) {
      neutralRandomIndex = generateRandomNumber(25);
    }
    alreadyMappedIndices.push(neutralRandomIndex);
    keyMap[neutralRandomIndex] = "NEUTRAL";
  }

  // fill everything with blue
  for (let i = 0; i < keyMap.length; i++) {
    if (keyMap[i] === "") {
      keyMap[i] = "BLUE";
    }
  }

  return keyMap;
};

export const instantiateToFalseSelected = () => {
  const selected = [];
  for (let i = 0; i < 25; i++) {
    selected.push(false);
  }
  return selected;
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
