---
title: EnlightenDataAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| EnlightenDataAsset()                                                          | Create a new instance of this container type.                                                                               |
| EnlightenDataAsset(EnlightenDataAsset other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| EnlightenDataAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [EnlightenDataAsset](/vext/ref/fb/enlightendataasset/).                                      |
| EnlightenDataAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenDataAsset](/vext/ref/fb/enlightendataasset/). |

## Properties

| Name                 | Type                         | Description |
| -------------------- | ---------------------------- | ----------- |
| debugBackFaceTexture | [TextureAsset](/vext/ref/fb/textureasset/) |             |
| maxResolutionY       | number                       |             |
| debugChartTexture    | [TextureAsset](/vext/ref/fb/textureasset/) |             |
| skyVisibilityTexture | [TextureAsset](/vext/ref/fb/textureasset/) |             |
| visibilityThreshold  | number                       |             |
| maxResolutionX       | number                       |             |
| loadDebugData        | bool                         |             |
| dynamicEnable        | bool                         |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [EnlightenDataAsset](/vext/ref/fb/enlightendataasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenDataAsset](/vext/ref/fb/enlightendataasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
