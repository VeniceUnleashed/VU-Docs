---
title: PlayerManager
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetPlayers](#getplayers)**() | [Player](/vext/ref/client/type/player)[] |
| **[GetPlayersByTeam](#getplayersbyteam)**(team: [TeamId](/vext/ref/fb/teamid)) | [Player](/vext/ref/client/type/player)[] |
| **[GetPlayersBySquad](#getplayersbysquad)**(team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid)) | [Player](/vext/ref/client/type/player)[] |
| **[GetPlayerById](#getplayerbyid)**(id: int) | [Player](/vext/ref/client/type/player) \| nil |
| **[GetPlayerByOnlineId](#getplayerbyonlineid)**(onlineId: int) | [Player](/vext/ref/client/type/player) \| nil |
| **[GetPlayerByName](#getplayerbyname)**(name: string) | [Player](/vext/ref/client/type/player) \| nil |
| **[GetPlayersByName](#getplayersbyname)**(name: string) | [Player](/vext/ref/client/type/player)[] |
| **[GetPlayerCount](#getplayercount)**() | int |
| **[GetLocalPlayer](#getlocalplayer)**() | [Player](/vext/ref/client/type/player) \| nil |
| **[GetSpectatorCount](#getspectatorcount)**() | int |
| **[GetSquadLeader](#getsquadleader)**(team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid)) | [Player](/vext/ref/client/type/player) \| nil |

## Methods

### GetPlayers {#getplayers}

> **GetPlayers**(): [Player](/vext/ref/client/type/player)[]

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/client/type/player)**[] |  |

### GetPlayersByTeam {#getplayersbyteam}

> **GetPlayersByTeam**(team: [TeamId](/vext/ref/fb/teamid)): [Player](/vext/ref/client/type/player)[]

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/client/type/player)**[] |  |

### GetPlayersBySquad {#getplayersbysquad}

> **GetPlayersBySquad**(team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid)): [Player](/vext/ref/client/type/player)[]

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |
| **squad** | [SquadId](/vext/ref/fb/squadid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/client/type/player)**[] |  |

### GetPlayerById {#getplayerbyid}

> **GetPlayerById**(id: int): [Player](/vext/ref/client/type/player) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **id** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/client/type/player)** \| **nil** |  |

### GetPlayerByOnlineId {#getplayerbyonlineid}

> **GetPlayerByOnlineId**(onlineId: int): [Player](/vext/ref/client/type/player) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **onlineId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/client/type/player)** \| **nil** |  |

### GetPlayerByName {#getplayerbyname}

> **GetPlayerByName**(name: string): [Player](/vext/ref/client/type/player) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/client/type/player)** \| **nil** |  |

### GetPlayersByName {#getplayersbyname}

> **GetPlayersByName**(name: string): [Player](/vext/ref/client/type/player)[]

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/client/type/player)**[] |  |

### GetPlayerCount {#getplayercount}

> **GetPlayerCount**(): int

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### GetLocalPlayer {#getlocalplayer}

> **GetLocalPlayer**(): [Player](/vext/ref/client/type/player) \| nil

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/client/type/player)** \| **nil** |  |

### GetSpectatorCount {#getspectatorcount}

> **GetSpectatorCount**(): int

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### GetSquadLeader {#getsquadleader}

> **GetSquadLeader**(team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid)): [Player](/vext/ref/client/type/player) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |
| **squad** | [SquadId](/vext/ref/fb/squadid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/client/type/player)** \| **nil** |  |

