---
title: UIRenderCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UIRenderCompData()                                                          | Create a new instance of this container type.                                                                           |
| UIRenderCompData(UIRenderCompData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UIRenderCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIRenderCompData](/vext/ref/fb/uirendercompdata/).                  |
| UIRenderCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIRenderCompData](/vext/ref/fb/uirendercompdata/).                                      |
| UIRenderCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIRenderCompData](/vext/ref/fb/uirendercompdata/). |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| backgroundRect1     | [Vec4](/vext/ref/shared/class/vec4) |             |
| backgroundRect0     | [Vec4](/vext/ref/shared/class/vec4) |             |
| bgTexture2          | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| bgTexture1          | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| alphaMin            | number                            |             |
| alphaAnimationSpeed | number                            |             |
| alphaOffset         | number                            |             |
| alphaMax            | number                            |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UIRenderCompData](/vext/ref/fb/uirendercompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIRenderCompData](/vext/ref/fb/uirendercompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
