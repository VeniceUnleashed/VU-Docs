---
title: SpawnReferenceObjectData
---
### Base Classes

[ReferenceObjectData](/vext/ref/fb/referenceobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SpawnReferenceObjectData()                                                          | Create a new instance of this container type.                                                                                           |
| SpawnReferenceObjectData(SpawnReferenceObjectData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SpawnReferenceObjectData([ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) other)          | Upcast an instance of type [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/).          |
| SpawnReferenceObjectData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/).                    |
| SpawnReferenceObjectData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/).              |
| SpawnReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/). |

## Properties

| Name                               | Type                                                    | Description |
| ---------------------------------- | ------------------------------------------------------- | ----------- |
| airdropTransform                   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| controllableInput                  | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| controllableTransform              | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| locationNameSid                    | string                                                  |             |
| locationTextSid                    | string                                                  |             |
| team                               | [TeamId](/vext/ref/fb/teamid/)                                        |             |
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
| [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
