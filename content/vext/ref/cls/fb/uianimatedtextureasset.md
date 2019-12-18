---
title: UIAnimatedTextureAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIAnimatedTextureAsset()                                                          | Create a new instance of this container type.                                                                                       |
| UIAnimatedTextureAsset(UIAnimatedTextureAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIAnimatedTextureAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIAnimatedTextureAsset](UIAnimatedTextureAsset).                                      |
| UIAnimatedTextureAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIAnimatedTextureAsset](UIAnimatedTextureAsset). |

## Properties

| Name         | Type                                         | Description |
| ------------ | -------------------------------------------- | ----------- |
| frameRate    | number                                       |             |
| textureAtlas | [TextureAsset](TextureAsset)                 |             |
| textureInfos | [UITextureAtlasInfo](UITextureAtlasInfo)\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIAnimatedTextureAsset](UIAnimatedTextureAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIAnimatedTextureAsset](UIAnimatedTextureAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
