---
title: PlayerManager
---
## Description

## Methods

| Type                                        | Name                                        | Parameters            |
| ------------------------------------------- | ------------------------------------------- | --------------------- |
| [Player\[](/vext/ref/server/class/player[])\] | [GetPlayers](#getplayers)                   |                       |
| [Player](/vext/ref/server/class/player)       | [GetPlayerByID](#getplayerbyid)             | int **id**            |
| [Player](/vext/ref/server/class/player)       | [GetPlayerByOnlineID](#getplayerbyonlineid) | int **onlineId**      |
| [Player](/vext/ref/server/class/player)       | [GetPlayerByGUID](#getplayerbyguid)         | string **guid**       |
| [Player](/vext/ref/server/class/player)       | [GetPlayerByName](#getplayerbyname)         | string **name**       |
| [Player\[](/vext/ref/server/class/player[])\] | [GetPlayersByName](#getplayersbyname)       | string **match**      |
| int                                         | [GetPlayerCount](#getplayercount)           |                       |
| void                                        | [SetSpectatorEnabled](#setspectatorenabled) | bool **enabled**      |
| bool                                        | [IsSpectatorEnabled](#isspectatorenabled)   |                       |
| void                                        | [FadeOutAll](#fadeoutall)                   | float **fadeOutTime** |
| void                                        | [FadeInAll](#fadeinall)                     | float **fadeInTime**  |

### GetPlayers

> [Player\[](/vext/ref/server/class/player[])\] **GetPlayers**()

### GetPlayerByID

> [Player](/vext/ref/server/class/player) **GetPlayerByID**(int **id**)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id   | int  |             |

### GetPlayerByOnlineID

> [Player](/vext/ref/server/class/player) **GetPlayerByOnlineID**(int **onlineId**)

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| onlineId | int  |             |

### GetPlayerByGUID

> [Player](/vext/ref/server/class/player) **GetPlayerByGUID**(string **guid**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| guid | string |             |

### GetPlayerByName

> [Player](/vext/ref/server/class/player) **GetPlayerByName**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

### GetPlayersByName

> [Player\[](/vext/ref/server/class/player[])\] **GetPlayersByName**(string **match**)

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| match | string |             |

### GetPlayerCount

> int **GetPlayerCount**()

### SetSpectatorEnabled

> void **SetSpectatorEnabled**(bool **enabled**)

Spectator mode is disabled by default. A mod can choose to enable it by doing something like

``` lua
Events:Subscribe("Extension:Loaded", function()
    PlayerManager:SetSpectatorEnabled(true)
end)
```

#### Parameters

| Name    | Type | Description |
| ------- | ---- | ----------- |
| enabled | bool |             |

### IsSpectatorEnabled

> bool **IsSpectatorEnabled**()

### FadeOutAll

> void **FadeOutAll**(float **fadeOutTime**)

#### Parameters

| Name        | Type  | Description |
| ----------- | ----- | ----------- |
| fadeOutTime | float |             |

### FadeInAll

> void **FadeInAll**(float **fadeInTime**)

#### Parameters

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| fadeInTime | float |             |
