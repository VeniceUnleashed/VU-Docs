---
title: StaticEnlightenData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| StaticEnlightenData()                                                          | Create a new instance of this container type.                                                                                 |
| StaticEnlightenData(StaticEnlightenData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| StaticEnlightenData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StaticEnlightenData](/vext/ref/fb/staticenlightendata/).                                      |
| StaticEnlightenData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticEnlightenData](/vext/ref/fb/staticenlightendata/). |

## Properties

| Name                          | Type                         | Description |
| ----------------------------- | ---------------------------- | ----------- |
| staticIrradianceChromaTexture | [TextureAsset](/vext/ref/fb/textureasset/) |             |
| staticIrradianceLumaTexture   | [TextureAsset](/vext/ref/fb/textureasset/) |             |
| staticDirectionTexture        | [TextureAsset](/vext/ref/fb/textureasset/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [StaticEnlightenData](/vext/ref/fb/staticenlightendata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StaticEnlightenData](/vext/ref/fb/staticenlightendata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
