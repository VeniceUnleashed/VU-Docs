---
title: TextureAssetUnlockPartData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| TextureAssetUnlockPartData()                                                          | Create a new instance of this container type.                                                                                               |
| TextureAssetUnlockPartData(TextureAssetUnlockPartData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| TextureAssetUnlockPartData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextureAssetUnlockPartData](TextureAssetUnlockPartData). |

## Properties

| Name    | Type                         | Description |
| ------- | ---------------------------- | ----------- |
| texture | [TextureAsset](TextureAsset) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TextureAssetUnlockPartData](TextureAssetUnlockPartData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TextureAssetUnlockPartData](TextureAssetUnlockPartData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
