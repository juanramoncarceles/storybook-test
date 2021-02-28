import React from "react";

import { Player } from "../components/Player";

const metadata = {
  title: "Example/Player",
  component: Player,  
};

export default metadata;

const Template = (args) => <Player {...args} />;

export const ConnectedDisabled = Template.bind({});
ConnectedDisabled.args = {
  name: "Ramon",
  connected: true,
  enabled: false,
};

export const DisconnectedDisabled = Template.bind({});
DisconnectedDisabled.args = {
  name: "Ramon",
  connected: false,
  enabled: false,
};

export const ConnectedEnabled = Template.bind({});
ConnectedEnabled.args = {
  name: "Ramon",
  connected: true,
  enabled: true,
}

export const DisconnectedEnabled = Template.bind({});
DisconnectedEnabled.args = {
  name: "Ramon",
  connected: false,
  enabled: true,
}
