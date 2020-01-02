---
title: CombatAreaTriggerEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| CombatAreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| CombatAreaTriggerEntityData(CombatAreaTriggerEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| CombatAreaTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [CombatAreaTriggerEntityData](CombatAreaTriggerEntityData).                    |
| CombatAreaTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [CombatAreaTriggerEntityData](CombatAreaTriggerEntityData).              |
| CombatAreaTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CombatAreaTriggerEntityData](CombatAreaTriggerEntityData).                            |
| CombatAreaTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CombatAreaTriggerEntityData](CombatAreaTriggerEntityData).                    |
| CombatAreaTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CombatAreaTriggerEntityData](CombatAreaTriggerEntityData).              |
| CombatAreaTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CombatAreaTriggerEntityData](CombatAreaTriggerEntityData). |

## Properties

| Name                 | Type                                 | Description |
| -------------------- | ------------------------------------ | ----------- |
| maxRandomSpawnHeight | number                               |             |
| spawnHeight          | number                               |             |
| timeToReturn         | number                               |             |
| deserterProjectile   | [BulletEntityData](BulletEntityData) |             |
| team                 | [TeamId](TeamId)                     |             |
| strikeRadius         | number                               |             |
| initalSpeed          | number                               |             |
| isAiAllowedOutside   | bool                                 |             |
| isTeamSpecific       | bool                                 |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CombatAreaTriggerEntityData](CombatAreaTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CombatAreaTriggerEntityData](CombatAreaTriggerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
