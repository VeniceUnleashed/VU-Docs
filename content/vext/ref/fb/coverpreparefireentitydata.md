---
title: CoverPrepareFireEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| CoverPrepareFireEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| CoverPrepareFireEntityData(CoverPrepareFireEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| CoverPrepareFireEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CoverPrepareFireEntityData](CoverPrepareFireEntityData).                            |
| CoverPrepareFireEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CoverPrepareFireEntityData](CoverPrepareFireEntityData).                    |
| CoverPrepareFireEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CoverPrepareFireEntityData](CoverPrepareFireEntityData).              |
| CoverPrepareFireEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CoverPrepareFireEntityData](CoverPrepareFireEntityData). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CoverPrepareFireEntityData](CoverPrepareFireEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CoverPrepareFireEntityData](CoverPrepareFireEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
