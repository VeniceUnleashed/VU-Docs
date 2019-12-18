---
title: Player (Server Class)
---
## Description

## Properties

| Name             | Type                                                | Writable | Description |
| ---------------- | --------------------------------------------------- | -------- | ----------- |
| name             | string                                              |          |             |
| int              | int                                                 |          |             |
| onlineId         | int                                                 |          |             |
| guid             | [Guid](/vext/ref/cls/shr/guid)                   |          |             |
| ip               | string                                              |          |             |
| ping             | int                                                 |          |             |
| alive            | bool                                                |          |             |
| isSquadLeader    | bool                                                |          |             |
| isSquadPrivate   | bool                                                |          |             |
| hasSoldier       | bool                                                |          |             |
| soldier          | [SoldierEntity](/vext/ref/cls/srv/soldierentity) |          |             |
| corpse           | [SoldierEntity](/vext/ref/cls/srv/soldierentity) |          |             |
| teamId           | [TeamId](/vext/ref/cls/fb/teamid)                |          |             |
| squadId          | [SquadId](/vext/ref/cls/fb/squadid)              |          |             |
| isAllowedToSpawn | bool                                                |          |             |
| selectedKit      | [DataContainer](/vext/ref/cls/shr/datacontainer) |          |             |
| score            | int                                                 |          |             |
| kills            | int                                                 |          |             |
| deaths           | int                                                 |          |             |

## Operators

| Operator | Parameters                                      |
| -------- | ----------------------------------------------- |
| \==      | [Player](/vext/ref/cls/srv/player) **other** |

## Methods

| Type                                                | Name                                      | Parameters                                                                                                                                                                                                   |
| --------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| void                                                | [Kick](#kick)                             | string **reason** = ""                                                                                                                                                                                       |
| void                                                | [Ban](#ban)                               |                                                                                                                                                                                                              |
| bool                                                | [Spawn](#spawn)                           | [Entity](/vext/ref/cls/shr/entity) **spawnPoint**, bool **checkSpawnArea**                                                                                                                                |
| void                                                | [SelectWeapon](#selectweapon)             | [WeaponSlot](/vext/ref/cls/fb/weaponslot) **slot**, [DataContainer](/vext/ref/cls/shr/datacontainer) **weaponUnlockAsset**, [DataContainer\[](/vext/ref/cls/shr/datacontainer[])\] **unlockAssets** |
| void                                                | [SelectUnlockAssets](#selectunlockassets) | [DataContainer](/vext/ref/cls/shr/datacontainer) **characterCustomizationAsset**, [DataContainer\[](/vext/ref/cls/shr/datacontainer[])\] **visualUnlockAssets**                                        |
| [SoldierEntity](/vext/ref/cls/srv/soldierentity) | [CreateSoldier](#createsoldier)           | [DataContainer](/vext/ref/cls/shr/datacontainer) **blueprint**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**                                                                     |
| void                                                | [SpawnSoldierAt](#spawnsoldierat)         | [SoldierEntity](/vext/ref/cls/srv/soldierentity) **entity**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**, [CharacterPoseType](/vext/ref/cls/fb/characterposetype) **pose**   |
| void                                                | [SetSquadLeader](#setsquadleader)         | bool **leader**, bool **squadPrivate**                                                                                                                                                                       |
| void                                                | [EnableInput](#enableinput)               | [EntryInputActionEnum](/vext/ref/cls/fb/entryinputactionenum) **action**, bool **enable**                                                                                                                 |
| void                                                | [Fade](#fade)                             | float **fadeInTime**, bool **fadeToBlack**                                                                                                                                                                   |

### Kick

> void **Kick**(string **reason** = "")

#### Parameters

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| reason | string |             |

### Ban

> void **Ban**()

### Spawn

> bool **Spawn**([Entity](/vext/ref/cls/shr/entity) **spawnPoint**, bool **checkSpawnArea**)

#### Parameters

| Name           | Type                                  | Description |
| -------------- | ------------------------------------- | ----------- |
| spawnPoint     | [Entity](/vext/ref/cls/shr/entity) |             |
| checkSpawnArea | bool                                  |             |

### SelectWeapon

> void **SelectWeapon**([WeaponSlot](/vext/ref/cls/fb/weaponslot) **slot**, [DataContainer](/vext/ref/cls/shr/datacontainer) **weaponUnlockAsset**, [DataContainer\[](/vext/ref/cls/shr/datacontainer[])\] **unlockAssets**)

#### Parameters

| Name              | Type                                                      | Description |
| ----------------- | --------------------------------------------------------- | ----------- |
| slot              | [WeaponSlot](/vext/ref/cls/fb/weaponslot)              |             |
| weaponUnlockAsset | [DataContainer](/vext/ref/cls/shr/datacontainer)       |             |
| unlockAssets      | [DataContainer\[](/vext/ref/cls/shr/datacontainer[])\] |             |

### SelectUnlockAssets

> void **SelectUnlockAssets**([DataContainer](/vext/ref/cls/shr/datacontainer) **characterCustomizationAsset**, [DataContainer\[](/vext/ref/cls/shr/datacontainer[])\] **visualUnlockAssets**)

#### Parameters

| Name                        | Type                                                      | Description |
| --------------------------- | --------------------------------------------------------- | ----------- |
| characterCustomizationAsset | [DataContainer](/vext/ref/cls/shr/datacontainer)       |             |
| visualUnlockAssets          | [DataContainer\[](/vext/ref/cls/shr/datacontainer[])\] |             |

### CreateSoldier

> [SoldierEntity](/vext/ref/cls/srv/soldierentity) **CreateSoldier**([DataContainer](/vext/ref/cls/shr/datacontainer) **blueprint**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**)

#### Parameters

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| blueprint | [DataContainer](/vext/ref/cls/shr/datacontainer)     |             |
| transform | [LinearTransform](/vext/ref/cls/shr/lineartransform) |             |

### SpawnSoldierAt

> void **SpawnSoldierAt**([SoldierEntity](/vext/ref/cls/srv/soldierentity) **entity**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**, [CharacterPoseType](/vext/ref/cls/fb/characterposetype) **pose**)

#### Parameters

| Name      | Type                                                       | Description |
| --------- | ---------------------------------------------------------- | ----------- |
| entity    | [SoldierEntity](/vext/ref/cls/srv/soldierentity)        |             |
| transform | [LinearTransform](/vext/ref/cls/shr/lineartransform)    |             |
| pose      | [CharacterPoseType](/vext/ref/cls/fb/characterposetype) |             |

### SetSquadLeader

> void **SetSquadLeader**(bool **leader**, bool **squadPrivate**)

#### Parameters

| Name         | Type | Description |
| ------------ | ---- | ----------- |
| leader       | bool |             |
| squadPrivate | bool |             |

### EnableInput

> void **EnableInput**([EntryInputActionEnum](/vext/ref/cls/fb/entryinputactionenum) **action**, bool **enable**)

#### Parameters

| Name   | Type                                                             | Description |
| ------ | ---------------------------------------------------------------- | ----------- |
| action | [EntryInputActionEnum](/vext/ref/cls/fb/entryinputactionenum) |             |
| enable | bool                                                             |             |

### Fade

> void **Fade**(float **fadeInTime**, bool **fadeToBlack**)

#### Parameters

| Name        | Type  | Description |
| ----------- | ----- | ----------- |
| fadeInTime  | float |             |
| fadeToBlack | bool  |             |
