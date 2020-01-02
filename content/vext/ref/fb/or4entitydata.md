---
title: Or4EntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Or4EntityData()                                                          | Create a new instance of this container type.                                                                     |
| Or4EntityData(Or4EntityData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| Or4EntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [Or4EntityData](Or4EntityData).                            |
| Or4EntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [Or4EntityData](Or4EntityData).                    |
| Or4EntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [Or4EntityData](Or4EntityData).              |
| Or4EntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Or4EntityData](Or4EntityData). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| realm | [Realm](Realm) |             |
| in1   | bool           |             |
| in2   | bool           |             |
| in3   | bool           |             |
| in4   | bool           |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [Or4EntityData](Or4EntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Or4EntityData](Or4EntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
