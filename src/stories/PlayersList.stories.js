import React from "react";

import { PlayersList } from "../components/PlayersList";

const metadata = {
  title: "Example/PlayersList",
  component: PlayersList,
}

export default metadata;

const Template = (args) => <PlayersList {...args} />;

const players = [
  {
    id: "0",
    name: "Valeria",
  },
  {
    id: "1",
    name: "Ramón",
  },
  {
    id: "2",
    name: "Claudia",
  },
];

export const AllDisconnected = Template.bind({});
AllDisconnected.args = {
  players,
};

export const OneDisconnected = Template.bind({});
OneDisconnected.args = {
  players,
  connectedPlayersIds: ["0", "1"],
}

export const OneEnabled = Template.bind({});
OneEnabled.args = {
  players,
  connectedPlayersIds: ["0", "1"],
  currentPlayerId: "1",
}
