---
title: ServerPlayerEvent
---
### Base Classes

[EntityEvent](/vext/ref/shared/class/entityevent)

## Description

## Constructors

| Constructor                                                                                                                                                                                                                                                                                                                                         | Description |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [ServerPlayerEvent](/vext/ref/server/class/serverplayerevent)(int **eventId**, [Player](/vext/ref/server/class/player) **player**, bool **sendToPlayerOnly**, bool **sendToHostOnly**, bool **sendToTeamOnly**, bool **invertPlayerFilter**, bool **invertTeamFilter**, bool **forwardToSpectators**, [TeamId](/vext/ref/fb/teamid) **team**)    |             |
| [ServerPlayerEvent](/vext/ref/server/class/serverplayerevent)(string **eventId**, [Player](/vext/ref/server/class/player) **player**, bool **sendToPlayerOnly**, bool **sendToHostOnly**, bool **sendToTeamOnly**, bool **invertPlayerFilter**, bool **invertTeamFilter**, bool **forwardToSpectators**, [TeamId](/vext/ref/fb/teamid) **team**) |             |

## Properties

| Name                | Type                                  | Writable | Description |
| ------------------- | ------------------------------------- | -------- | ----------- |
| player              | [Player](/vext/ref/server/class/player) |          |             |
| sendToPlayerOnly    | bool                                  |          |             |
| sendToHostOnly      | bool                                  |          |             |
| sendToTeamOnly      | bool                                  |          |             |
| invertPlayerFilter  | bool                                  |          |             |
| invertTeamFilter    | bool                                  |          |             |
| forwardToSpectators | bool                                  |          |             |
| team                | [TeamId](/vext/ref/fb/teamid)  |          |             |
