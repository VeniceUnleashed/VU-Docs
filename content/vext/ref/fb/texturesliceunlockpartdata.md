---
title: TextureSliceUnlockPartData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| TextureSliceUnlockPartData()                                                          | Create a new instance of this container type.                                                                                               |
| TextureSliceUnlockPartData(TextureSliceUnlockPartData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| TextureSliceUnlockPartData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextureSliceUnlockPartData](/vext/ref/fb/texturesliceunlockpartdata/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| sliceIndex | number |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TextureSliceUnlockPartData](/vext/ref/fb/texturesliceunlockpartdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TextureSliceUnlockPartData](/vext/ref/fb/texturesliceunlockpartdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
