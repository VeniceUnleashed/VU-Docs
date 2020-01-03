---
title: TextureUnlockPartData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| TextureUnlockPartData()                                                          | Create a new instance of this container type.                                                                                     |
| TextureUnlockPartData(TextureUnlockPartData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| TextureUnlockPartData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextureUnlockPartData](TextureUnlockPartData). |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| textureReference | [TextureReference](TextureReference) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [TextureUnlockPartData](TextureUnlockPartData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TextureUnlockPartData](TextureUnlockPartData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
