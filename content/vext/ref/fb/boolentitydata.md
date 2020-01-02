---
title: BoolEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| BoolEntityData()                                                          | Create a new instance of this container type.                                                                       |
| BoolEntityData(BoolEntityData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| BoolEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [BoolEntityData](BoolEntityData).                            |
| BoolEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [BoolEntityData](BoolEntityData).                    |
| BoolEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BoolEntityData](BoolEntityData).              |
| BoolEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoolEntityData](BoolEntityData). |

## Properties

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| realm        | [Realm](Realm) |             |
| defaultValue | bool           |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [BoolEntityData](BoolEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoolEntityData](BoolEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
