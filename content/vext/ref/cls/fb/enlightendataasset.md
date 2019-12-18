---
title: EnlightenDataAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| EnlightenDataAsset()                                                          | Create a new instance of this container type.                                                                               |
| EnlightenDataAsset(EnlightenDataAsset other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| EnlightenDataAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EnlightenDataAsset](EnlightenDataAsset).                                      |
| EnlightenDataAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EnlightenDataAsset](EnlightenDataAsset). |

## Properties

| Name                 | Type                         | Description |
| -------------------- | ---------------------------- | ----------- |
| debugBackFaceTexture | [TextureAsset](TextureAsset) |             |
| maxResolutionY       | number                       |             |
| debugChartTexture    | [TextureAsset](TextureAsset) |             |
| skyVisibilityTexture | [TextureAsset](TextureAsset) |             |
| visibilityThreshold  | number                       |             |
| maxResolutionX       | number                       |             |
| loadDebugData        | bool                         |             |
| dynamicEnable        | bool                         |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [EnlightenDataAsset](EnlightenDataAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EnlightenDataAsset](EnlightenDataAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
