---
title: EmitterSystemAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| EmitterSystemAsset()                                                          | Create a new instance of this container type.                                                                               |
| EmitterSystemAsset(EmitterSystemAsset other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| EmitterSystemAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [EmitterSystemAsset](/vext/ref/fb/emittersystemasset/).                                      |
| EmitterSystemAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EmitterSystemAsset](/vext/ref/fb/emittersystemasset/). |

## Properties

| Name               | Type                                                   | Description |
| ------------------ | ------------------------------------------------------ | ----------- |
| textureInfos       | [EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo/)\[\] |             |
| baseAtlasTexture   | [TextureAsset](/vext/ref/fb/textureasset/)                           |             |
| normalAtlasTexture | [TextureAsset](/vext/ref/fb/textureasset/)                           |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [EmitterSystemAsset](/vext/ref/fb/emittersystemasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EmitterSystemAsset](/vext/ref/fb/emittersystemasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
