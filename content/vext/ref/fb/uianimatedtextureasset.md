---
title: UIAnimatedTextureAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIAnimatedTextureAsset()                                                          | Create a new instance of this container type.                                                                                       |
| UIAnimatedTextureAsset(UIAnimatedTextureAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIAnimatedTextureAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIAnimatedTextureAsset](/vext/ref/fb/uianimatedtextureasset/).                                      |
| UIAnimatedTextureAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIAnimatedTextureAsset](/vext/ref/fb/uianimatedtextureasset/). |

## Properties

| Name         | Type                                         | Description |
| ------------ | -------------------------------------------- | ----------- |
| frameRate    | number                                       |             |
| textureAtlas | [TextureAsset](/vext/ref/fb/textureasset/)                 |             |
| textureInfos | [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo/)\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIAnimatedTextureAsset](/vext/ref/fb/uianimatedtextureasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIAnimatedTextureAsset](/vext/ref/fb/uianimatedtextureasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
