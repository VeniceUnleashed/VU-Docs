---
title: DestructionDepthTreeAsset
---
### Base Classes

[RasterTreeAsset](/vext/ref/fb/rastertreeasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionDepthTreeAsset()                                                          | Create a new instance of this container type.                                                                                             |
| DestructionDepthTreeAsset(DestructionDepthTreeAsset other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| DestructionDepthTreeAsset([RasterTreeAsset](/vext/ref/fb/rastertreeasset/) other)                  | Upcast an instance of type [RasterTreeAsset](/vext/ref/fb/rastertreeasset/) to [DestructionDepthTreeAsset](/vext/ref/fb/destructiondepthtreeasset/).                  |
| DestructionDepthTreeAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionDepthTreeAsset](/vext/ref/fb/destructiondepthtreeasset/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionDepthTreeAsset](/vext/ref/fb/destructiondepthtreeasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionDepthTreeAsset](/vext/ref/fb/destructiondepthtreeasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
