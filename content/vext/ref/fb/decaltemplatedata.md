---
title: DecalTemplateData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DecalTemplateData()                                                          | Create a new instance of this container type.                                                                             |
| DecalTemplateData(DecalTemplateData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| DecalTemplateData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DecalTemplateData](DecalTemplateData).                                      |
| DecalTemplateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DecalTemplateData](DecalTemplateData). |

## Properties

| Name                  | Type                                             | Description |
| --------------------- | ------------------------------------------------ | ----------- |
| size                  | number                                           |             |
| randomSize            | number                                           |             |
| rotation              | number                                           |             |
| randomRotation        | number                                           |             |
| clipAngle             | number                                           |             |
| proximityRadiusFactor | number                                           |             |
| normalOffset          | number                                           |             |
| shader                | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| meshUVIndex           | number                                           |             |
| atlasTile             | [DecalAtlasTile](DecalAtlasTile)                 |             |
| sortingPriority       | number                                           |             |
| projected             | bool                                             |             |
| projectMultiple       | bool                                             |             |
| materialIndex         | number                                           |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [DecalTemplateData](DecalTemplateData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DecalTemplateData](DecalTemplateData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
