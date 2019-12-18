---
title: UnlockableTextureSliceCollection (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UnlockableTextureSliceCollection()                                                          | Create a new instance of this container type.                                                                                                           |
| UnlockableTextureSliceCollection(UnlockableTextureSliceCollection other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| UnlockableTextureSliceCollection([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UnlockableTextureSliceCollection](UnlockableTextureSliceCollection). |

## Properties

| Name           | Type                                                         | Description |
| -------------- | ------------------------------------------------------------ | ----------- |
| defaultValue   | number                                                       |             |
| possibleValues | [TextureSliceUnlockPartData](TextureSliceUnlockPartData)\[\] |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UnlockableTextureSliceCollection](UnlockableTextureSliceCollection) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UnlockableTextureSliceCollection](UnlockableTextureSliceCollection) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
