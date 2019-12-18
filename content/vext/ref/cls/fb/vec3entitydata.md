---
title: Vec3EntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Vec3EntityData()                                                          | Create a new instance of this container type.                                                                       |
| Vec3EntityData(Vec3EntityData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| Vec3EntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [Vec3EntityData](Vec3EntityData).                            |
| Vec3EntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [Vec3EntityData](Vec3EntityData).                    |
| Vec3EntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [Vec3EntityData](Vec3EntityData).              |
| Vec3EntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [Vec3EntityData](Vec3EntityData). |

## Properties

| Name         | Type                              | Description |
| ------------ | --------------------------------- | ----------- |
| defaultValue | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| realm        | [Realm](Realm)                    |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [Vec3EntityData](Vec3EntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [Vec3EntityData](Vec3EntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
