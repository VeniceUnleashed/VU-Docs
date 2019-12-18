---
title: CustomizeBaseEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| CustomizeBaseEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| CustomizeBaseEntityData(CustomizeBaseEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| CustomizeBaseEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CustomizeBaseEntityData](CustomizeBaseEntityData).                            |
| CustomizeBaseEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CustomizeBaseEntityData](CustomizeBaseEntityData).                    |
| CustomizeBaseEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CustomizeBaseEntityData](CustomizeBaseEntityData).              |
| CustomizeBaseEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CustomizeBaseEntityData](CustomizeBaseEntityData). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| realm | [Realm](Realm) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CustomizeBaseEntityData](CustomizeBaseEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CustomizeBaseEntityData](CustomizeBaseEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
