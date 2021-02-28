import React from 'react';
import PropTypes from 'prop-types';
import './playersList.css';

import { Player } from "./Player";

/**
 * List of players.
 * It indicates the players available and their state: connected and/or active.
 */
export const PlayersList = ({ players, connectedPlayersIds, currentPlayerId }) => {
  return (
    <ul className="players-list">
      {players.length ? players.map(p => <li key={p.id}><Player name={p.name} connected={connectedPlayersIds.includes(p.id)} enabled={p.id === currentPlayerId} /></li>) : null}
    </ul>
  )
}

PlayersList.defaultProps = {
  players: [],
  connectedPlayersIds: [],
  currentPlayerId: "",
}

PlayersList.propTypes = {
  /**
   * List of player objects.
   */
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  /**
   * List of ids of the connected players.
   */
  connectedPlayersIds: PropTypes.arrayOf(PropTypes.string),
  /**
   * Id of the currently active player.
   */
  currentPlayerId: PropTypes.string,
}
