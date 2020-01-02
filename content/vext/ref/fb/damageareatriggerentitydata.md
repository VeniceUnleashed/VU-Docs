---
title: DamageAreaTriggerEntityData
---
### Base Classes

[TriggerEntityData](TriggerEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DamageAreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| DamageAreaTriggerEntityData(DamageAreaTriggerEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| DamageAreaTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [DamageAreaTriggerEntityData](DamageAreaTriggerEntityData).              |
| DamageAreaTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DamageAreaTriggerEntityData](DamageAreaTriggerEntityData).                    |
| DamageAreaTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DamageAreaTriggerEntityData](DamageAreaTriggerEntityData).              |
| DamageAreaTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DamageAreaTriggerEntityData](DamageAreaTriggerEntityData).                            |
| DamageAreaTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DamageAreaTriggerEntityData](DamageAreaTriggerEntityData).                    |
| DamageAreaTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DamageAreaTriggerEntityData](DamageAreaTriggerEntityData).              |
| DamageAreaTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DamageAreaTriggerEntityData](DamageAreaTriggerEntityData). |

## Properties

| Name                            | Type             | Description |
| ------------------------------- | ---------------- | ----------- |
| damagePerSecond                 | number           |             |
| teamOfImmortalCharacters        | [TeamId](TeamId) |             |
| damageTime                      | number           |             |
| damageVehicles                  | bool             |             |
| damageBangers                   | bool             |             |
| excludeImmortalCharactersInTeam | bool             |             |
| damageCharacters                | bool             |             |
| excludeShieldedSoldiers         | bool             |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DamageAreaTriggerEntityData](DamageAreaTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DamageAreaTriggerEntityData](DamageAreaTriggerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
