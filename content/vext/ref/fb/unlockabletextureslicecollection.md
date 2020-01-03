---
title: UnlockableTextureSliceCollection
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UnlockableTextureSliceCollection()                                                          | Create a new instance of this container type.                                                                                                           |
| UnlockableTextureSliceCollection(UnlockableTextureSliceCollection other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| UnlockableTextureSliceCollection([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UnlockableTextureSliceCollection](/vext/ref/fb/unlockabletextureslicecollection/). |

## Properties

| Name           | Type                                                         | Description |
| -------------- | ------------------------------------------------------------ | ----------- |
| defaultValue   | number                                                       |             |
| possibleValues | [TextureSliceUnlockPartData](/vext/ref/fb/texturesliceunlockpartdata/)\[\] |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UnlockableTextureSliceCollection](/vext/ref/fb/unlockabletextureslicecollection/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UnlockableTextureSliceCollection](/vext/ref/fb/unlockabletextureslicecollection/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
