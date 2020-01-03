---
title: TextureAsset
---
### Base Classes

[TextureBaseAsset](/vext/ref/fb/texturebaseasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| TextureAsset()                                                          | Create a new instance of this container type.                                                                   |
| TextureAsset(TextureAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| TextureAsset([TextureBaseAsset](/vext/ref/fb/texturebaseasset/) other)                | Upcast an instance of type [TextureBaseAsset](/vext/ref/fb/texturebaseasset/) to [TextureAsset](/vext/ref/fb/textureasset/).                |
| TextureAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [TextureAsset](/vext/ref/fb/textureasset/).                                      |
| TextureAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextureAsset](/vext/ref/fb/textureasset/). |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [TextureAsset](/vext/ref/fb/textureasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TextureAsset](/vext/ref/fb/textureasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
