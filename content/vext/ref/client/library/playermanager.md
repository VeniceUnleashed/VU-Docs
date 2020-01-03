---
title: PlayerManager (Client Manager)
---
## Description

## Methods

| Type                                        | Name                                  | Parameters       |
| ------------------------------------------- | ------------------------------------- | ---------------- |
| [Player\[](/vext/ref/cls/clt/player[])\] | [GetPlayers](#getplayers)             |                  |
| [Player](/vext/ref/cls/clt/player)       | [GetPlayerByID](#getplayerbyid)       | int **id**       |
| [Player](/vext/ref/cls/clt/player)       | [GetPlayerByName](#getplayerbyname)   | string **name**  |
| [Player\[](/vext/ref/cls/clt/player[])\] | [GetPlayersByName](#getplayersbyname) | string **match** |
| int                                         | [GetPlayerCount](#getplayercount)     |                  |
| [Player](/vext/ref/cls/clt/player)       | [GetLocalPlayer](#getlocalplayer)     |                  |

### GetPlayers

> [Player\[](/vext/ref/cls/clt/player[])\] **GetPlayers**()

### GetPlayerByID

> [Player](/vext/ref/cls/clt/player) **GetPlayerByID**(int **id**)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id   | int  |             |

### GetPlayerByName

> [Player](/vext/ref/cls/clt/player) **GetPlayerByName**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

### GetPlayersByName

> [Player\[](/vext/ref/cls/clt/player[])\] **GetPlayersByName**(string **match**)

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| match | string |             |

### GetPlayerCount

> int **GetPlayerCount**()

### GetLocalPlayer

> [Player](/vext/ref/cls/clt/player) **GetLocalPlayer**()
