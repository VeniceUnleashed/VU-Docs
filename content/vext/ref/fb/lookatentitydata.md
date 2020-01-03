---
title: LookAtEntityData
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| LookAtEntityData()                                                          | Create a new instance of this container type.                                                                           |
| LookAtEntityData(LookAtEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| LookAtEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [LookAtEntityData](LookAtEntityData).              |
| LookAtEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [LookAtEntityData](LookAtEntityData).                            |
| LookAtEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LookAtEntityData](LookAtEntityData).                    |
| LookAtEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LookAtEntityData](LookAtEntityData).              |
| LookAtEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LookAtEntityData](LookAtEntityData). |

## Properties

| Name               | Type | Description |
| ------------------ | ---- | ----------- |
| runOnce            | bool |             |
| useStaticDirection | bool |             |
| enabled            | bool |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [LookAtEntityData](LookAtEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LookAtEntityData](LookAtEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
