---
title: Player
---
## Description

## Properties

| Name             | Type                                                | Writable | Description |
| ---------------- | --------------------------------------------------- | -------- | ----------- |
| name             | string                                              |          |             |
| int              | int                                                 |          |             |
| onlineId         | int                                                 |          |             |
| guid             | [Guid](/vext/ref/shared/class/guid)                   |          |             |
| ip               | string                                              |          |             |
| ping             | int                                                 |          |             |
| alive            | bool                                                |          |             |
| isSquadLeader    | bool                                                |          |             |
| isSquadPrivate   | bool                                                |          |             |
| hasSoldier       | bool                                                |          |             |
| soldier          | [SoldierEntity](/vext/ref/server/class/soldierentity) |          |             |
| corpse           | [SoldierEntity](/vext/ref/server/class/soldierentity) |          |             |
| teamId           | [TeamId](/vext/ref/fb/teamid)                |          |             |
| squadId          | [SquadId](/vext/ref/fb/squadid)              |          |             |
| isAllowedToSpawn | bool                                                |          |             |
| selectedKit      | [DataContainer](/vext/ref/shared/class/datacontainer) |          |             |
| score            | int                                                 |          |             |
| kills            | int                                                 |          |             |
| deaths           | int                                                 |          |             |

## Operators

| Operator | Parameters                                      |
| -------- | ----------------------------------------------- |
| \==      | [Player](/vext/ref/server/class/player) **other** |

## Methods

| Type                                                | Name                                      | Parameters                                                                                                                                                                                                   |
| --------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| void                                                | [Kick](#kick)                             | string **reason** = ""                                                                                                                                                                                       |
| void                                                | [Ban](#ban)                               |                                                                                                                                                                                                              |
| bool                                                | [Spawn](#spawn)                           | [Entity](/vext/ref/shared/class/entity) **spawnPoint**, bool **checkSpawnArea**                                                                                                                                |
| void                                                | [SelectWeapon](#selectweapon)             | [WeaponSlot](/vext/ref/fb/weaponslot) **slot**, [DataContainer](/vext/ref/shared/class/datacontainer) **weaponUnlockAsset**, [DataContainer](/vext/ref/shared/class/datacontainer)\[\] **unlockAssets** |
| void                                                | [SelectUnlockAssets](#selectunlockassets) | [DataContainer](/vext/ref/shared/class/datacontainer) **characterCustomizationAsset**, [DataContainer](/vext/ref/shared/class/datacontainer)\[\] **visualUnlockAssets**                                        |
| [SoldierEntity](/vext/ref/server/class/soldierentity) | [CreateSoldier](#createsoldier)           | [DataContainer](/vext/ref/shared/class/datacontainer) **blueprint**, [LinearTransform](/vext/ref/shared/class/lineartransform) **transform**                                                                     |
| void                                                | [SpawnSoldierAt](#spawnsoldierat)         | [SoldierEntity](/vext/ref/server/class/soldierentity) **entity**, [LinearTransform](/vext/ref/shared/class/lineartransform) **transform**, [CharacterPoseType](/vext/ref/fb/characterposetype) **pose**   |
| void                                                | [SetSquadLeader](#setsquadleader)         | bool **leader**, bool **squadPrivate**                                                                                                                                                                       |
| void                                                | [EnableInput](#enableinput)               | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) **action**, bool **enable**                                                                                                                 |
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

> bool **Spawn**([Entity](/vext/ref/shared/class/entity) **spawnPoint**, bool **checkSpawnArea**)

#### Parameters

| Name           | Type                                  | Description |
| -------------- | ------------------------------------- | ----------- |
| spawnPoint     | [Entity](/vext/ref/shared/class/entity) |             |
| checkSpawnArea | bool                                  |             |

### SelectWeapon

> void **SelectWeapon**([WeaponSlot](/vext/ref/fb/weaponslot) **slot**, [DataContainer](/vext/ref/shared/class/datacontainer) **weaponUnlockAsset**, [DataContainer](/vext/ref/shared/class/datacontainer)\[\] **unlockAssets**)

#### Parameters

| Name              | Type                                                      | Description |
| ----------------- | --------------------------------------------------------- | ----------- |
| slot              | [WeaponSlot](/vext/ref/fb/weaponslot)              |             |
| weaponUnlockAsset | [DataContainer](/vext/ref/shared/class/datacontainer)       |             |
| unlockAssets      | [DataContainer](/vext/ref/shared/class/datacontainer)\[\] |             |

### SelectUnlockAssets

> void **SelectUnlockAssets**([DataContainer](/vext/ref/shared/class/datacontainer) **characterCustomizationAsset**, [DataContainer](/vext/ref/shared/class/datacontainer)\[\] **visualUnlockAssets**)

#### Parameters

| Name                        | Type                                                      | Description |
| --------------------------- | --------------------------------------------------------- | ----------- |
| characterCustomizationAsset | [DataContainer](/vext/ref/shared/class/datacontainer)       |             |
| visualUnlockAssets          | [DataContainer](/vext/ref/shared/class/datacontainer)\[\] |             |

### CreateSoldier

> [SoldierEntity](/vext/ref/server/class/soldierentity) **CreateSoldier**([DataContainer](/vext/ref/shared/class/datacontainer) **blueprint**, [LinearTransform](/vext/ref/shared/class/lineartransform) **transform**)

#### Parameters

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| blueprint | [DataContainer](/vext/ref/shared/class/datacontainer)     |             |
| transform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |

### SpawnSoldierAt

> void **SpawnSoldierAt**([SoldierEntity](/vext/ref/server/class/soldierentity) **entity**, [LinearTransform](/vext/ref/shared/class/lineartransform) **transform**, [CharacterPoseType](/vext/ref/fb/characterposetype) **pose**)

#### Parameters

| Name      | Type                                                       | Description |
| --------- | ---------------------------------------------------------- | ----------- |
| entity    | [SoldierEntity](/vext/ref/server/class/soldierentity)        |             |
| transform | [LinearTransform](/vext/ref/shared/class/lineartransform)    |             |
| pose      | [CharacterPoseType](/vext/ref/fb/characterposetype) |             |

### SetSquadLeader

> void **SetSquadLeader**(bool **leader**, bool **squadPrivate**)

#### Parameters

| Name         | Type | Description |
| ------------ | ---- | ----------- |
| leader       | bool |             |
| squadPrivate | bool |             |

### EnableInput

> void **EnableInput**([EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) **action**, bool **enable**)

#### Parameters

| Name   | Type                                                             | Description |
| ------ | ---------------------------------------------------------------- | ----------- |
| action | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |             |
| enable | bool                                                             |             |

### Fade

> void **Fade**(float **fadeInTime**, bool **fadeToBlack**)

#### Parameters

| Name        | Type  | Description |
| ----------- | ----- | ----------- |
| fadeInTime  | float |             |
| fadeToBlack | bool  |             |
