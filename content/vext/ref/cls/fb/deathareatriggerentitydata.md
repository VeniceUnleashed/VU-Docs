---
title: DeathAreaTriggerEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DeathAreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| DeathAreaTriggerEntityData(DeathAreaTriggerEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DeathAreaTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DeathAreaTriggerEntityData](DeathAreaTriggerEntityData).                    |
| DeathAreaTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DeathAreaTriggerEntityData](DeathAreaTriggerEntityData).              |
| DeathAreaTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DeathAreaTriggerEntityData](DeathAreaTriggerEntityData).                            |
| DeathAreaTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DeathAreaTriggerEntityData](DeathAreaTriggerEntityData).                    |
| DeathAreaTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DeathAreaTriggerEntityData](DeathAreaTriggerEntityData).              |
| DeathAreaTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DeathAreaTriggerEntityData](DeathAreaTriggerEntityData). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| damage       | number |             |
| timeToReturn | number |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DeathAreaTriggerEntityData](DeathAreaTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DeathAreaTriggerEntityData](DeathAreaTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
