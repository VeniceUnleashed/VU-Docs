---
title: RenderTextureAsset
---
### Base Classes

[TextureBaseAsset](/vext/ref/fb/texturebaseasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| RenderTextureAsset()                                                          | Create a new instance of this container type.                                                                               |
| RenderTextureAsset(RenderTextureAsset other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| RenderTextureAsset([TextureBaseAsset](/vext/ref/fb/texturebaseasset/) other)                | Upcast an instance of type [TextureBaseAsset](/vext/ref/fb/texturebaseasset/) to [RenderTextureAsset](/vext/ref/fb/rendertextureasset/).                |
| RenderTextureAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [RenderTextureAsset](/vext/ref/fb/rendertextureasset/).                                      |
| RenderTextureAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RenderTextureAsset](/vext/ref/fb/rendertextureasset/). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [RenderTextureAsset](/vext/ref/fb/rendertextureasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RenderTextureAsset](/vext/ref/fb/rendertextureasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
