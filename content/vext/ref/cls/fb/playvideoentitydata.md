---
title: PlayVideoEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PlayVideoEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| PlayVideoEntityData(PlayVideoEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PlayVideoEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PlayVideoEntityData](PlayVideoEntityData).                            |
| PlayVideoEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PlayVideoEntityData](PlayVideoEntityData).                    |
| PlayVideoEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PlayVideoEntityData](PlayVideoEntityData).              |
| PlayVideoEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PlayVideoEntityData](PlayVideoEntityData). |

## Properties

| Name            | Type                                   | Description |
| --------------- | -------------------------------------- | ----------- |
| movie           | [MovieTextureAsset](MovieTextureAsset) |             |
| keepBlackScreen | bool                                   |             |
| allowSkip       | bool                                   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayVideoEntityData](PlayVideoEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PlayVideoEntityData](PlayVideoEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
