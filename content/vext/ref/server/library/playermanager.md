---
title: PlayerManager
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetPlayers](#getplayers)**() | [Player](/vext/ref/server/type/player)[] |
| **[GetPlayerById](#getplayerbyid)**(id: int) | [Player](/vext/ref/server/type/player) \| nil |
| **[GetPlayerByOnlineId](#getplayerbyonlineid)**(onlineId: int) | [Player](/vext/ref/server/type/player) \| nil |
| **[GetPlayerByGuid](#getplayerbyguid)**(guid: [Guid](/vext/ref/shared/type/guid)) | [Player](/vext/ref/server/type/player) \| nil |
| **[GetPlayerByName](#getplayerbyname)**(name: string) | [Player](/vext/ref/server/type/player) \| nil |
| **[GetPlayersByName](#getplayersbyname)**(name: string) | [Player](/vext/ref/server/type/player)[] |
| **[GetPlayerCount](#getplayercount)**() | int |
| **[GetPlayersByTeam](#getplayersbyteam)**(team: [TeamId](/vext/ref/fb/teamid)) | [Player](/vext/ref/server/type/player)[] |
| **[GetPlayersBySquad](#getplayersbysquad)**(team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid)) | [Player](/vext/ref/server/type/player)[] |
| **[GetSquadLeader](#getsquadleader)**(team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid)) | [Player](/vext/ref/server/type/player) \| nil |
| **[CreatePlayer](#createplayer)**(name: string, team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid)) | [Player](/vext/ref/server/type/player) \| nil |
| **[DeletePlayer](#deleteplayer)**(player: [Player](/vext/ref/server/type/player)) | void |
| **[SetSpectatorEnabled](#setspectatorenabled)**(enabled: bool) | void |
| **[IsSpectatorEnabled](#isspectatorenabled)**() | bool |
| **[FadeInAll](#fadeinall)**(fadeTime: float) | void |
| **[FadeOutAll](#fadeoutall)**(fadeTime: float) | void |

## Methods

### GetPlayers {#getplayers}

> **GetPlayers**(): [Player](/vext/ref/server/type/player)[]

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/server/type/player)**[] |  |

### GetPlayerById {#getplayerbyid}

> **GetPlayerById**(id: int): [Player](/vext/ref/server/type/player) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **id** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/server/type/player)** \| **nil** |  |

### GetPlayerByOnlineId {#getplayerbyonlineid}

> **GetPlayerByOnlineId**(onlineId: int): [Player](/vext/ref/server/type/player) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **onlineId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/server/type/player)** \| **nil** |  |

### GetPlayerByGuid {#getplayerbyguid}

> **GetPlayerByGuid**(guid: [Guid](/vext/ref/shared/type/guid)): [Player](/vext/ref/server/type/player) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/server/type/player)** \| **nil** |  |

### GetPlayerByName {#getplayerbyname}

> **GetPlayerByName**(name: string): [Player](/vext/ref/server/type/player) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/server/type/player)** \| **nil** |  |

### GetPlayersByName {#getplayersbyname}

> **GetPlayersByName**(name: string): [Player](/vext/ref/server/type/player)[]

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/server/type/player)**[] |  |

### GetPlayerCount {#getplayercount}

> **GetPlayerCount**(): int

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### GetPlayersByTeam {#getplayersbyteam}

> **GetPlayersByTeam**(team: [TeamId](/vext/ref/fb/teamid)): [Player](/vext/ref/server/type/player)[]

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/server/type/player)**[] |  |

### GetPlayersBySquad {#getplayersbysquad}

> **GetPlayersBySquad**(team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid)): [Player](/vext/ref/server/type/player)[]

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |
| **squad** | [SquadId](/vext/ref/fb/squadid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/server/type/player)**[] |  |

### GetSquadLeader {#getsquadleader}

> **GetSquadLeader**(team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid)): [Player](/vext/ref/server/type/player) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |
| **squad** | [SquadId](/vext/ref/fb/squadid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/server/type/player)** \| **nil** |  |

### CreatePlayer {#createplayer}

> **CreatePlayer**(name: string, team: [TeamId](/vext/ref/fb/teamid), squad: [SquadId](/vext/ref/fb/squadid)): [Player](/vext/ref/server/type/player) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |
| **squad** | [SquadId](/vext/ref/fb/squadid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/server/type/player)** \| **nil** |  |

### DeletePlayer {#deleteplayer}

> **DeletePlayer**(player: [Player](/vext/ref/server/type/player))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |

### SetSpectatorEnabled {#setspectatorenabled}

> **SetSpectatorEnabled**(enabled: bool)

Spectator mode is disabled by default. A mod can choose to enable it by using this function.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **enabled** | bool |  |

#### Example

```lua
Events:Subscribe('Extension:Loaded', function()
  PlayerManager:SetSpectatorEnabled(true)
end)
```

### IsSpectatorEnabled {#isspectatorenabled}

> **IsSpectatorEnabled**(): bool

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### FadeInAll {#fadeinall}

> **FadeInAll**(fadeTime: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **fadeTime** | float |  |

### FadeOutAll {#fadeoutall}

> **FadeOutAll**(fadeTime: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **fadeTime** | float |  |

