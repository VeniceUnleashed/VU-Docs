---
title: UIEndOfRoundEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIEndOfRoundEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| UIEndOfRoundEntityData(UIEndOfRoundEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIEndOfRoundEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [UIEndOfRoundEntityData](UIEndOfRoundEntityData).                    |
| UIEndOfRoundEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [UIEndOfRoundEntityData](UIEndOfRoundEntityData).              |
| UIEndOfRoundEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [UIEndOfRoundEntityData](UIEndOfRoundEntityData).                            |
| UIEndOfRoundEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [UIEndOfRoundEntityData](UIEndOfRoundEntityData).                    |
| UIEndOfRoundEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [UIEndOfRoundEntityData](UIEndOfRoundEntityData).              |
| UIEndOfRoundEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIEndOfRoundEntityData](UIEndOfRoundEntityData). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| preEorTime | number |             |
| eorTime    | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIEndOfRoundEntityData](UIEndOfRoundEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIEndOfRoundEntityData](UIEndOfRoundEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
