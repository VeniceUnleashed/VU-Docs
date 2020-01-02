---
title: DelayEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| DelayEntityData()                                                          | Create a new instance of this container type.                                                                         |
| DelayEntityData(DelayEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| DelayEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DelayEntityData](DelayEntityData).                            |
| DelayEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DelayEntityData](DelayEntityData).                    |
| DelayEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DelayEntityData](DelayEntityData).              |
| DelayEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DelayEntityData](DelayEntityData). |

## Properties

| Name                  | Type           | Description |
| --------------------- | -------------- | ----------- |
| delay                 | number         |             |
| realm                 | [Realm](Realm) |             |
| autoStart             | bool           |             |
| runOnce               | bool           |             |
| removeDuplicateEvents | bool           |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [DelayEntityData](DelayEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DelayEntityData](DelayEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
