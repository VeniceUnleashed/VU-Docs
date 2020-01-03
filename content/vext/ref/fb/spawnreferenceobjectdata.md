---
title: SpawnReferenceObjectData
---
### Base Classes

[ReferenceObjectData](ReferenceObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SpawnReferenceObjectData()                                                          | Create a new instance of this container type.                                                                                           |
| SpawnReferenceObjectData(SpawnReferenceObjectData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SpawnReferenceObjectData([ReferenceObjectData](ReferenceObjectData) other)          | Upcast an instance of type [ReferenceObjectData](ReferenceObjectData) to [SpawnReferenceObjectData](SpawnReferenceObjectData).          |
| SpawnReferenceObjectData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SpawnReferenceObjectData](SpawnReferenceObjectData).                    |
| SpawnReferenceObjectData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SpawnReferenceObjectData](SpawnReferenceObjectData).              |
| SpawnReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnReferenceObjectData](SpawnReferenceObjectData). |

## Properties

| Name                               | Type                                                    | Description |
| ---------------------------------- | ------------------------------------------------------- | ----------- |
| airdropTransform                   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| controllableInput                  | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| controllableTransform              | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| locationNameSid                    | string                                                  |             |
| locationTextSid                    | string                                                  |             |
| team                               | [TeamId](TeamId)                                        |             |
| spawnProtectionFriendlyKilledCount | number                                                  |             |
| spawnProtectionFriendlyKilledTime  | number                                                  |             |
| rotationRoll                       | number                                                  |             |
| throttle                           | number                                                  |             |
| initialSpawnDelay                  | number                                                  |             |
| spawnDelay                         | number                                                  |             |
| maxCount                           | number                                                  |             |
| maxCountSimultaneously             | number                                                  |             |
| totalCountSimultaneouslyOfType     | number                                                  |             |
| spawnAreaRadius                    | number                                                  |             |
| spawnProtectionRadius              | number                                                  |             |
| rotationYaw                        | number                                                  |             |
| rotationPitch                      | number                                                  |             |
| initialVelocity                    | number                                                  |             |
| takeControlEntryIndex              | number                                                  |             |
| spawnProtectionCheckAllTeams       | bool                                                    |             |
| clearBangersOnSpawn                | bool                                                    |             |
| tryToSpawnOutOfSight               | bool                                                    |             |
| sendWeaponEvents                   | bool                                                    |             |
| takeControlOnTransformChange       | bool                                                    |             |
| returnControlOnIdle                | bool                                                    |             |
| autoSpawn                          | bool                                                    |             |
| useAsSpawnPoint                    | bool                                                    |             |
| lockedTeam                         | bool                                                    |             |
| initialAutoSpawn                   | bool                                                    |             |
| overwriteThrottle                  | bool                                                    |             |
| onlySendEventForHumanPlayers       | bool                                                    |             |
| enabled                            | bool                                                    |             |
| isDynamicSpawn                     | bool                                                    |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnReferenceObjectData](SpawnReferenceObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnReferenceObjectData](SpawnReferenceObjectData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
