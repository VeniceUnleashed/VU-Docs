---
title: BoolToEventEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| BoolToEventEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| BoolToEventEntityData(BoolToEventEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| BoolToEventEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [BoolToEventEntityData](BoolToEventEntityData).                            |
| BoolToEventEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [BoolToEventEntityData](BoolToEventEntityData).                    |
| BoolToEventEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BoolToEventEntityData](BoolToEventEntityData).              |
| BoolToEventEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BoolToEventEntityData](BoolToEventEntityData). |

## Properties

| Name        | Type           | Description |
| ----------- | -------------- | ----------- |
| realm       | [Realm](Realm) |             |
| value       | bool           |             |
| initalEvent | bool           |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [BoolToEventEntityData](BoolToEventEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BoolToEventEntityData](BoolToEventEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
