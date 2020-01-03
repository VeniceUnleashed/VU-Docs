---
title: SaveGameLoadedEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SaveGameLoadedEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| SaveGameLoadedEntityData(SaveGameLoadedEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SaveGameLoadedEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SaveGameLoadedEntityData](SaveGameLoadedEntityData).                            |
| SaveGameLoadedEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SaveGameLoadedEntityData](SaveGameLoadedEntityData).                    |
| SaveGameLoadedEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SaveGameLoadedEntityData](SaveGameLoadedEntityData).              |
| SaveGameLoadedEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SaveGameLoadedEntityData](SaveGameLoadedEntityData). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SaveGameLoadedEntityData](SaveGameLoadedEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SaveGameLoadedEntityData](SaveGameLoadedEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
