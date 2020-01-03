---
title: PlayerManager (Client Manager)
---
## Description

## Methods

| Type                                        | Name                                  | Parameters       |
| ------------------------------------------- | ------------------------------------- | ---------------- |
| [Player](/vext/ref/client/class/player)\[\] | [GetPlayers](#getplayers)             |                  |
| [Player](/vext/ref/client/class/player)       | [GetPlayerByID](#getplayerbyid)       | int **id**       |
| [Player](/vext/ref/client/class/player)       | [GetPlayerByName](#getplayerbyname)   | string **name**  |
| [Player](/vext/ref/client/class/player)\[\] | [GetPlayersByName](#getplayersbyname) | string **match** |
| int                                         | [GetPlayerCount](#getplayercount)     |                  |
| [Player](/vext/ref/client/class/player)       | [GetLocalPlayer](#getlocalplayer)     |                  |

### GetPlayers

> [Player](/vext/ref/client/class/player)\[\] **GetPlayers**()

### GetPlayerByID

> [Player](/vext/ref/client/class/player) **GetPlayerByID**(int **id**)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id   | int  |             |

### GetPlayerByName

> [Player](/vext/ref/client/class/player) **GetPlayerByName**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

### GetPlayersByName

> [Player](/vext/ref/client/class/player)\[\] **GetPlayersByName**(string **match**)

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| match | string |             |

### GetPlayerCount

> int **GetPlayerCount**()

### GetLocalPlayer

> [Player](/vext/ref/client/class/player) **GetLocalPlayer**()
