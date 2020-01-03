---
title: DestructionDepthTreeAsset
---
### Base Classes

[RasterTreeAsset](RasterTreeAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionDepthTreeAsset()                                                          | Create a new instance of this container type.                                                                                             |
| DestructionDepthTreeAsset(DestructionDepthTreeAsset other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| DestructionDepthTreeAsset([RasterTreeAsset](RasterTreeAsset) other)                  | Upcast an instance of type [RasterTreeAsset](RasterTreeAsset) to [DestructionDepthTreeAsset](DestructionDepthTreeAsset).                  |
| DestructionDepthTreeAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionDepthTreeAsset](DestructionDepthTreeAsset). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionDepthTreeAsset](DestructionDepthTreeAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionDepthTreeAsset](DestructionDepthTreeAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
