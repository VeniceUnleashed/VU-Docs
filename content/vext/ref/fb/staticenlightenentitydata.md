---
title: StaticEnlightenEntityData
---
### Base Classes

[EnlightenEntityData](EnlightenEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| StaticEnlightenEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| StaticEnlightenEntityData(StaticEnlightenEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| StaticEnlightenEntityData([EnlightenEntityData](EnlightenEntityData) other)          | Upcast an instance of type [EnlightenEntityData](EnlightenEntityData) to [StaticEnlightenEntityData](StaticEnlightenEntityData).          |
| StaticEnlightenEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [StaticEnlightenEntityData](StaticEnlightenEntityData).                            |
| StaticEnlightenEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [StaticEnlightenEntityData](StaticEnlightenEntityData).                    |
| StaticEnlightenEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [StaticEnlightenEntityData](StaticEnlightenEntityData).              |
| StaticEnlightenEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticEnlightenEntityData](StaticEnlightenEntityData). |

## Properties

| Name                 | Type                                       | Description |
| -------------------- | ------------------------------------------ | ----------- |
| enlightenData        | [StaticEnlightenData](StaticEnlightenData) |             |
| dynamicEnlightenData | [EnlightenDataAsset](EnlightenDataAsset)   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StaticEnlightenEntityData](StaticEnlightenEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StaticEnlightenEntityData](StaticEnlightenEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
