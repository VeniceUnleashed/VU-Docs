---
title: SelectEventEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SelectEventEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| SelectEventEntityData(SelectEventEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SelectEventEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SelectEventEntityData](SelectEventEntityData).                            |
| SelectEventEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SelectEventEntityData](SelectEventEntityData).                    |
| SelectEventEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SelectEventEntityData](SelectEventEntityData).              |
| SelectEventEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SelectEventEntityData](SelectEventEntityData). |

## Properties

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| realm  | [Realm](Realm) |             |
| events | string\[\]     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SelectEventEntityData](SelectEventEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SelectEventEntityData](SelectEventEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
