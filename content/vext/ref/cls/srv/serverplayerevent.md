---
title: ServerPlayerEvent (Server Class)
---
### Base Classes

[EntityEvent](/vext/ref/cls/shr/entityevent)

## Description

## Constructors

| Constructor                                                                                                                                                                                                                                                                                                                                         | Description |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [ServerPlayerEvent](/vext/ref/cls/srv/serverplayerevent)(int **eventId**, [Player](/vext/ref/cls/srv/player) **player**, bool **sendToPlayerOnly**, bool **sendToHostOnly**, bool **sendToTeamOnly**, bool **invertPlayerFilter**, bool **invertTeamFilter**, bool **forwardToSpectators**, [TeamId](/vext/ref/cls/fb/teamid) **team**)    |             |
| [ServerPlayerEvent](/vext/ref/cls/srv/serverplayerevent)(string **eventId**, [Player](/vext/ref/cls/srv/player) **player**, bool **sendToPlayerOnly**, bool **sendToHostOnly**, bool **sendToTeamOnly**, bool **invertPlayerFilter**, bool **invertTeamFilter**, bool **forwardToSpectators**, [TeamId](/vext/ref/cls/fb/teamid) **team**) |             |

## Properties

| Name                | Type                                  | Writable | Description |
| ------------------- | ------------------------------------- | -------- | ----------- |
| player              | [Player](/vext/ref/cls/srv/player) |          |             |
| sendToPlayerOnly    | bool                                  |          |             |
| sendToHostOnly      | bool                                  |          |             |
| sendToTeamOnly      | bool                                  |          |             |
| invertPlayerFilter  | bool                                  |          |             |
| invertTeamFilter    | bool                                  |          |             |
| forwardToSpectators | bool                                  |          |             |
| team                | [TeamId](/vext/ref/cls/fb/teamid)  |          |             |
