---
title: DestructionVolumeAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| DestructionVolumeAsset()                                                          | Create a new instance of this container type.                                                                                       |
| DestructionVolumeAsset(DestructionVolumeAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| DestructionVolumeAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset/).                                      |
| DestructionVolumeAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset/). |

## Properties

| Name              | Type                         | Description |
| ----------------- | ---------------------------- | ----------- |
| diffuseAtlas      | [TextureAsset](/vext/ref/fb/textureasset/) |             |
| normalmapAtlas    | [TextureAsset](/vext/ref/fb/textureasset/) |             |
| atlasTextureScale | number                       |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
