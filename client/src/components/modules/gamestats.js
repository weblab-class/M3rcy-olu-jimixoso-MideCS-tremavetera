import React, { useState } from "react";

import { post, get } from "../../utilities";
const [winsCount, setWinsCount] = useState(winsCount);
const addWin = (currentCount) => {
  setWinsCount(currentCount + 1);
};

const [lossesCount, setLossesCount] = useState(lossesCount);
const addLoss = () => {
  setLossesCount(lossesCount + 1);
  alert("It worked!");
};

const [playsCount, setplaysCount] = useState(0);
const addPlay = () => {
  setplaysCount(playsCount + 1);
  alert("It worked!");
  // We need to post this and get the value of the one on the Database
};
