---
title: TextureBaseAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| TextureBaseAsset()                                                          | Create a new instance of this container type.                                                                           |
| TextureBaseAsset(TextureBaseAsset other)                                    | Create a reference copy of an instance of the same type.                                                                |
| TextureBaseAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TextureBaseAsset](TextureBaseAsset).                                      |
| TextureBaseAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TextureBaseAsset](TextureBaseAsset). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [TextureBaseAsset](TextureBaseAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TextureBaseAsset](TextureBaseAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
