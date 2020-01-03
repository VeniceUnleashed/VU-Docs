---
title: CompareFloatEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| CompareFloatEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| CompareFloatEntityData(CompareFloatEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| CompareFloatEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CompareFloatEntityData](CompareFloatEntityData).                            |
| CompareFloatEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CompareFloatEntityData](CompareFloatEntityData).                    |
| CompareFloatEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CompareFloatEntityData](CompareFloatEntityData).              |
| CompareFloatEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompareFloatEntityData](CompareFloatEntityData). |

## Properties

| Name                    | Type           | Description |
| ----------------------- | -------------- | ----------- |
| realm                   | [Realm](Realm) |             |
| a                       | number         |             |
| b                       | number         |             |
| triggerOnPropertyChange | bool           |             |
| triggerOnStart          | bool           |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CompareFloatEntityData](CompareFloatEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CompareFloatEntityData](CompareFloatEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
