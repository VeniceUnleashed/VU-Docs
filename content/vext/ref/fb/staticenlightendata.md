---
title: StaticEnlightenData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| StaticEnlightenData()                                                          | Create a new instance of this container type.                                                                                 |
| StaticEnlightenData(StaticEnlightenData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| StaticEnlightenData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StaticEnlightenData](StaticEnlightenData).                                      |
| StaticEnlightenData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticEnlightenData](StaticEnlightenData). |

## Properties

| Name                          | Type                         | Description |
| ----------------------------- | ---------------------------- | ----------- |
| staticIrradianceChromaTexture | [TextureAsset](TextureAsset) |             |
| staticIrradianceLumaTexture   | [TextureAsset](TextureAsset) |             |
| staticDirectionTexture        | [TextureAsset](TextureAsset) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [StaticEnlightenData](StaticEnlightenData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StaticEnlightenData](StaticEnlightenData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
