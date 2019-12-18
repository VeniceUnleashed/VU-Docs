---
title: UIMinimapIconTextureAtlasAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| UIMinimapIconTextureAtlasAsset()                                                          | Create a new instance of this container type.                                                                                                       |
| UIMinimapIconTextureAtlasAsset(UIMinimapIconTextureAtlasAsset other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| UIMinimapIconTextureAtlasAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIMinimapIconTextureAtlasAsset](UIMinimapIconTextureAtlasAsset).                                      |
| UIMinimapIconTextureAtlasAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIMinimapIconTextureAtlasAsset](UIMinimapIconTextureAtlasAsset). |

## Properties

| Name         | Type                                             | Description |
| ------------ | ------------------------------------------------ | ----------- |
| icons        | [UIMinimapIconTexture](UIMinimapIconTexture)\[\] |             |
| textureAtlas | [TextureAsset](TextureAsset)                     |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIMinimapIconTextureAtlasAsset](UIMinimapIconTextureAtlasAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIMinimapIconTextureAtlasAsset](UIMinimapIconTextureAtlasAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
