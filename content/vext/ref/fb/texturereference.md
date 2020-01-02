---
title: TextureReference
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| TextureReference()                                                          | Create a new instance of this container type.                                                                           |
| TextureReference(TextureReference other)                                    | Create a reference copy of an instance of the same type.                                                                |
| TextureReference([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TextureReference](TextureReference).                                      |
| TextureReference([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextureReference](TextureReference). |

## Properties

| Name    | Type                         | Description |
| ------- | ---------------------------- | ----------- |
| texture | [TextureAsset](TextureAsset) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [TextureReference](TextureReference) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TextureReference](TextureReference) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
