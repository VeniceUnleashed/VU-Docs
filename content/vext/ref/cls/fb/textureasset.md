---
title: TextureAsset (Frostbite Container)
---
### Base Classes

[TextureBaseAsset](TextureBaseAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| TextureAsset()                                                          | Create a new instance of this container type.                                                                   |
| TextureAsset(TextureAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| TextureAsset([TextureBaseAsset](TextureBaseAsset) other)                | Upcast an instance of type [TextureBaseAsset](TextureBaseAsset) to [TextureAsset](TextureAsset).                |
| TextureAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TextureAsset](TextureAsset).                                      |
| TextureAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TextureAsset](TextureAsset). |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [TextureAsset](TextureAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TextureAsset](TextureAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
