---
title: RandomWalkOrderEntityData
---
### Base Classes

[BFOrderEntityData](BFOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| RandomWalkOrderEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| RandomWalkOrderEntityData(RandomWalkOrderEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| RandomWalkOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)              | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [RandomWalkOrderEntityData](RandomWalkOrderEntityData).              |
| RandomWalkOrderEntityData([OrderEntityData](OrderEntityData) other)                  | Upcast an instance of type [OrderEntityData](OrderEntityData) to [RandomWalkOrderEntityData](RandomWalkOrderEntityData).                  |
| RandomWalkOrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [RandomWalkOrderEntityData](RandomWalkOrderEntityData).                            |
| RandomWalkOrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RandomWalkOrderEntityData](RandomWalkOrderEntityData).                    |
| RandomWalkOrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RandomWalkOrderEntityData](RandomWalkOrderEntityData).              |
| RandomWalkOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RandomWalkOrderEntityData](RandomWalkOrderEntityData). |

## Properties

| Name            | Type | Description |
| --------------- | ---- | ----------- |
| combatForbidden | bool |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [RandomWalkOrderEntityData](RandomWalkOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RandomWalkOrderEntityData](RandomWalkOrderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
