---
title: NoiseTextureAsset
---
### Base Classes

[TextureBaseAsset](/vext/ref/fb/texturebaseasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| NoiseTextureAsset()                                                          | Create a new instance of this container type.                                                                             |
| NoiseTextureAsset(NoiseTextureAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| NoiseTextureAsset([TextureBaseAsset](/vext/ref/fb/texturebaseasset/) other)                | Upcast an instance of type [TextureBaseAsset](/vext/ref/fb/texturebaseasset/) to [NoiseTextureAsset](/vext/ref/fb/noisetextureasset/).                |
| NoiseTextureAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [NoiseTextureAsset](/vext/ref/fb/noisetextureasset/).                                      |
| NoiseTextureAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [NoiseTextureAsset](/vext/ref/fb/noisetextureasset/). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [NoiseTextureAsset](/vext/ref/fb/noisetextureasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [NoiseTextureAsset](/vext/ref/fb/noisetextureasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
