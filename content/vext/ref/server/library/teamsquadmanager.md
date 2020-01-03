---
title: TeamSquadManager
---
## Description

Handles and manipulates in-game players, teams, and squads.

## Methods

| Type | Name                                        | Parameters                                                                                      |
| ---- | ------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| int  | [GetSquadPlayerCount](#getsquadplayercount) | [TeamId](/vext/ref/fb/teamid) **team**, [SquadId](/vext/ref/fb/squadid) **squad** |
| int  | [GetTeamPlayerCount](#getteamplayercount)   | [TeamId](/vext/ref/fb/teamid) **team**                                                   |

### GetSquadPlayerCount

> int **GetSquadPlayerCount**([TeamId](/vext/ref/fb/teamid) **team**, [SquadId](/vext/ref/fb/squadid) **squad**)

Returns the player count of the specified squad.

#### Parameters

| Name  | Type                                   | Description                |
| ----- | -------------------------------------- | -------------------------- |
| team  | [TeamId](/vext/ref/fb/teamid)   | Team that the squad is in. |
| squad | [SquadId](/vext/ref/fb/squadid) | Squad's ID.                |

### GetTeamPlayerCount

> int **GetTeamPlayerCount**([TeamId](/vext/ref/fb/teamid) **team**)

Returns a team's player count.

#### Parameters

| Name | Type                                 | Description                      |
| ---- | ------------------------------------ | -------------------------------- |
| team | [TeamId](/vext/ref/fb/teamid) | Team to get the player count of. |
