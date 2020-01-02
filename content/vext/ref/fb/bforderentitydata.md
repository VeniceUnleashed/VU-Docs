---
title: BFOrderEntityData
---
### Base Classes

[OrderEntityData](OrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| BFOrderEntityData()                                                          | Create a new instance of this container type.                                                                             |
| BFOrderEntityData(BFOrderEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| BFOrderEntityData([OrderEntityData](OrderEntityData) other)                  | Upcast an instance of type [OrderEntityData](OrderEntityData) to [BFOrderEntityData](BFOrderEntityData).                  |
| BFOrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [BFOrderEntityData](BFOrderEntityData).                            |
| BFOrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [BFOrderEntityData](BFOrderEntityData).                    |
| BFOrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BFOrderEntityData](BFOrderEntityData).              |
| BFOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BFOrderEntityData](BFOrderEntityData). |

## Properties

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| forbiddenToFire | bool |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [BFOrderEntityData](BFOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BFOrderEntityData](BFOrderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
