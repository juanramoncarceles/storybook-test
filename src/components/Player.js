import React from 'react';
import PropTypes from 'prop-types';
import './player.css';

/**
 * Player list item.
 * Indicates the state of the player: connected and/or active.
 */
export const Player = ({ name, connected, enabled }) => {
  return (
    <div className={`player ${!connected ? "player--disconnected" : ""} ${enabled ? "player--enabled" : ""}`}>
      <span className={"player-indicator"}></span>
      <span className={"player-name"}>{name}</span>
    </div>
  )
}

Player.defaultProps = {
  connected: false,
  enabled: false,
}

Player.propTypes = {
  /**
   * The name of the player.
   */
  name: PropTypes.string.isRequired,
  /**
   * Boolean indicating if the player is connected or not.
   */
  connected: PropTypes.bool,
  /**
   * Boolean indicating if the player is enabled (its turn).
   */
  enabled: PropTypes.bool,
}