---
title: UIMinimapIconTextureAtlasAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| UIMinimapIconTextureAtlasAsset()                                                          | Create a new instance of this container type.                                                                                                       |
| UIMinimapIconTextureAtlasAsset(UIMinimapIconTextureAtlasAsset other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| UIMinimapIconTextureAtlasAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIMinimapIconTextureAtlasAsset](/vext/ref/fb/uiminimapicontextureatlasasset/).                                      |
| UIMinimapIconTextureAtlasAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIMinimapIconTextureAtlasAsset](/vext/ref/fb/uiminimapicontextureatlasasset/). |

## Properties

| Name         | Type                                             | Description |
| ------------ | ------------------------------------------------ | ----------- |
| icons        | [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture/)\[\] |             |
| textureAtlas | [TextureAsset](/vext/ref/fb/textureasset/)                     |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIMinimapIconTextureAtlasAsset](/vext/ref/fb/uiminimapicontextureatlasasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIMinimapIconTextureAtlasAsset](/vext/ref/fb/uiminimapicontextureatlasasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
