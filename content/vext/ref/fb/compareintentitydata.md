---
title: CompareIntEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| CompareIntEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| CompareIntEntityData(CompareIntEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| CompareIntEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CompareIntEntityData](CompareIntEntityData).                            |
| CompareIntEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CompareIntEntityData](CompareIntEntityData).                    |
| CompareIntEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CompareIntEntityData](CompareIntEntityData).              |
| CompareIntEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompareIntEntityData](CompareIntEntityData). |

## Properties

| Name                    | Type           | Description |
| ----------------------- | -------------- | ----------- |
| realm                   | [Realm](Realm) |             |
| a                       | number         |             |
| b                       | number         |             |
| triggerOnPropertyChange | bool           |             |
| triggerOnStart          | bool           |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [CompareIntEntityData](CompareIntEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CompareIntEntityData](CompareIntEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
