---
title: TextureArrayAsset
---
### Base Classes

[TextureAsset](/vext/ref/fb/textureasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| TextureArrayAsset()                                                          | Create a new instance of this container type.                                                                             |
| TextureArrayAsset(TextureArrayAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| TextureArrayAsset([TextureAsset](/vext/ref/fb/textureasset/) other)                        | Upcast an instance of type [TextureAsset](/vext/ref/fb/textureasset/) to [TextureArrayAsset](/vext/ref/fb/texturearrayasset/).                        |
| TextureArrayAsset([TextureBaseAsset](/vext/ref/fb/texturebaseasset/) other)                | Upcast an instance of type [TextureBaseAsset](/vext/ref/fb/texturebaseasset/) to [TextureArrayAsset](/vext/ref/fb/texturearrayasset/).                |
| TextureArrayAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [TextureArrayAsset](/vext/ref/fb/texturearrayasset/).                                      |
| TextureArrayAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextureArrayAsset](/vext/ref/fb/texturearrayasset/). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [TextureArrayAsset](/vext/ref/fb/texturearrayasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TextureArrayAsset](/vext/ref/fb/texturearrayasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
