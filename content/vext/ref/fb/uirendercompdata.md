---
title: UIRenderCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UIRenderCompData()                                                          | Create a new instance of this container type.                                                                           |
| UIRenderCompData(UIRenderCompData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UIRenderCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIRenderCompData](UIRenderCompData).                  |
| UIRenderCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIRenderCompData](UIRenderCompData).                                      |
| UIRenderCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIRenderCompData](UIRenderCompData). |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| backgroundRect1     | [Vec4](/vext/ref/shared/class/vec4) |             |
| backgroundRect0     | [Vec4](/vext/ref/shared/class/vec4) |             |
| bgTexture2          | [TextureAsset](TextureAsset)      |             |
| bgTexture1          | [TextureAsset](TextureAsset)      |             |
| alphaMin            | number                            |             |
| alphaAnimationSpeed | number                            |             |
| alphaOffset         | number                            |             |
| alphaMax            | number                            |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UIRenderCompData](UIRenderCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIRenderCompData](UIRenderCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
