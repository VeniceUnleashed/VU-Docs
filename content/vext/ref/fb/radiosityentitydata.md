---
title: RadiosityEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| RadiosityEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| RadiosityEntityData(RadiosityEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| RadiosityEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [RadiosityEntityData](RadiosityEntityData).                            |
| RadiosityEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RadiosityEntityData](RadiosityEntityData).                    |
| RadiosityEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RadiosityEntityData](RadiosityEntityData).              |
| RadiosityEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RadiosityEntityData](RadiosityEntityData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [RadiosityEntityData](RadiosityEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RadiosityEntityData](RadiosityEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
