---
title: DestructionVolumeAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| DestructionVolumeAsset()                                                          | Create a new instance of this container type.                                                                                       |
| DestructionVolumeAsset(DestructionVolumeAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| DestructionVolumeAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DestructionVolumeAsset](DestructionVolumeAsset).                                      |
| DestructionVolumeAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DestructionVolumeAsset](DestructionVolumeAsset). |

## Properties

| Name              | Type                         | Description |
| ----------------- | ---------------------------- | ----------- |
| diffuseAtlas      | [TextureAsset](TextureAsset) |             |
| normalmapAtlas    | [TextureAsset](TextureAsset) |             |
| atlasTextureScale | number                       |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionVolumeAsset](DestructionVolumeAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DestructionVolumeAsset](DestructionVolumeAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
