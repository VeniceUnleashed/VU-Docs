---
title: EnvmapEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| EnvmapEntityData()                                                          | Create a new instance of this container type.                                                                           |
| EnvmapEntityData(EnvmapEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| EnvmapEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EnvmapEntityData](EnvmapEntityData).                            |
| EnvmapEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EnvmapEntityData](EnvmapEntityData).                    |
| EnvmapEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EnvmapEntityData](EnvmapEntityData).              |
| EnvmapEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnvmapEntityData](EnvmapEntityData). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [EnvmapEntityData](EnvmapEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnvmapEntityData](EnvmapEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
