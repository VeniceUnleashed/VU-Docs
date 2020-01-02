---
title: EnlightenEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EnlightenEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| EnlightenEntityData(EnlightenEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EnlightenEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EnlightenEntityData](EnlightenEntityData).                            |
| EnlightenEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EnlightenEntityData](EnlightenEntityData).                    |
| EnlightenEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EnlightenEntityData](EnlightenEntityData).              |
| EnlightenEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenEntityData](EnlightenEntityData). |

## Properties

| Name     | Type           | Description |
| -------- | -------------- | ----------- |
| priority | number         |             |
| realm    | [Realm](Realm) |             |
| enable   | bool           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EnlightenEntityData](EnlightenEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenEntityData](EnlightenEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
