---
title: TextureAtlasAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| TextureAtlasAsset()                                                          | Create a new instance of this container type.                                                                             |
| TextureAtlasAsset(TextureAtlasAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| TextureAtlasAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TextureAtlasAsset](TextureAtlasAsset).                                      |
| TextureAtlasAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TextureAtlasAsset](TextureAtlasAsset). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [TextureAtlasAsset](TextureAtlasAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TextureAtlasAsset](TextureAtlasAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
