---
title: HumanPlayerEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| HumanPlayerEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| HumanPlayerEntityData(HumanPlayerEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| HumanPlayerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [HumanPlayerEntityData](HumanPlayerEntityData).                    |
| HumanPlayerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [HumanPlayerEntityData](HumanPlayerEntityData).              |
| HumanPlayerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [HumanPlayerEntityData](HumanPlayerEntityData).                            |
| HumanPlayerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [HumanPlayerEntityData](HumanPlayerEntityData).                    |
| HumanPlayerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [HumanPlayerEntityData](HumanPlayerEntityData).              |
| HumanPlayerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HumanPlayerEntityData](HumanPlayerEntityData). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| playerKilledDelay  | number |             |
| lastManStandingSid | string |             |
| displayTime        | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [HumanPlayerEntityData](HumanPlayerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HumanPlayerEntityData](HumanPlayerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
