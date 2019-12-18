---
title: NotEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| NotEntityData()                                                          | Create a new instance of this container type.                                                                     |
| NotEntityData(NotEntityData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| NotEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [NotEntityData](NotEntityData).                            |
| NotEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [NotEntityData](NotEntityData).                    |
| NotEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [NotEntityData](NotEntityData).              |
| NotEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [NotEntityData](NotEntityData). |

## Properties

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| realm   | [Realm](Realm) |             |
| inValue | bool           |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [NotEntityData](NotEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [NotEntityData](NotEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
