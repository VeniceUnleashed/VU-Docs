---
title: StreamGridEntityData (Frostbite Container)
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| StreamGridEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| StreamGridEntityData(StreamGridEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| StreamGridEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [StreamGridEntityData](StreamGridEntityData).              |
| StreamGridEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [StreamGridEntityData](StreamGridEntityData).                            |
| StreamGridEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [StreamGridEntityData](StreamGridEntityData).                    |
| StreamGridEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [StreamGridEntityData](StreamGridEntityData).              |
| StreamGridEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StreamGridEntityData](StreamGridEntityData). |

## Properties

| Name                      | Type                                 | Description |
| ------------------------- | ------------------------------------ | ----------- |
| cellSize                  | number                               |             |
| viewDistance              | number                               |             |
| maxStreamInCountPerFrame  | number                               |             |
| maxStreamOutCountPerFrame | number                               |             |
| cells                     | [StreamGridCell](StreamGridCell)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [StreamGridEntityData](StreamGridEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StreamGridEntityData](StreamGridEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
