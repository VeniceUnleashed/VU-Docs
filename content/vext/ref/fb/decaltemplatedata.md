---
title: DecalTemplateData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DecalTemplateData()                                                          | Create a new instance of this container type.                                                                             |
| DecalTemplateData(DecalTemplateData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| DecalTemplateData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [DecalTemplateData](/vext/ref/fb/decaltemplatedata/).                                      |
| DecalTemplateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DecalTemplateData](/vext/ref/fb/decaltemplatedata/). |

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
| shader                | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| meshUVIndex           | number                                           |             |
| atlasTile             | [DecalAtlasTile](/vext/ref/fb/decalatlastile/)                 |             |
| sortingPriority       | number                                           |             |
| projected             | bool                                             |             |
| projectMultiple       | bool                                             |             |
| materialIndex         | number                                           |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [DecalTemplateData](/vext/ref/fb/decaltemplatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DecalTemplateData](/vext/ref/fb/decaltemplatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
