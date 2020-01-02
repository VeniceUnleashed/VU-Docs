---
title: DynamicEnlightenEntityData
---
### Base Classes

[EnlightenEntityData](EnlightenEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicEnlightenEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| DynamicEnlightenEntityData(DynamicEnlightenEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DynamicEnlightenEntityData([EnlightenEntityData](EnlightenEntityData) other)          | Upcast an instance of type [EnlightenEntityData](EnlightenEntityData) to [DynamicEnlightenEntityData](DynamicEnlightenEntityData).          |
| DynamicEnlightenEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DynamicEnlightenEntityData](DynamicEnlightenEntityData).                            |
| DynamicEnlightenEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DynamicEnlightenEntityData](DynamicEnlightenEntityData).                    |
| DynamicEnlightenEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DynamicEnlightenEntityData](DynamicEnlightenEntityData).              |
| DynamicEnlightenEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicEnlightenEntityData](DynamicEnlightenEntityData). |

## Properties

| Name          | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| enlightenData | [EnlightenDataAsset](EnlightenDataAsset) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DynamicEnlightenEntityData](DynamicEnlightenEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicEnlightenEntityData](DynamicEnlightenEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
