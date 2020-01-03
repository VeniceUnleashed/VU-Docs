---
title: CancelOrderEntityData
---
### Base Classes

[BFOrderEntityData](BFOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CancelOrderEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| CancelOrderEntityData(CancelOrderEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| CancelOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)              | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [CancelOrderEntityData](CancelOrderEntityData).              |
| CancelOrderEntityData([OrderEntityData](OrderEntityData) other)                  | Upcast an instance of type [OrderEntityData](OrderEntityData) to [CancelOrderEntityData](CancelOrderEntityData).                  |
| CancelOrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CancelOrderEntityData](CancelOrderEntityData).                            |
| CancelOrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CancelOrderEntityData](CancelOrderEntityData).                    |
| CancelOrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CancelOrderEntityData](CancelOrderEntityData).              |
| CancelOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CancelOrderEntityData](CancelOrderEntityData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [CancelOrderEntityData](CancelOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CancelOrderEntityData](CancelOrderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
