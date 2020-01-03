---
title: VehicleVisualCustomizationAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleVisualCustomizationAsset()                                                          | Create a new instance of this container type.                                                                                                         |
| VehicleVisualCustomizationAsset(VehicleVisualCustomizationAsset other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| VehicleVisualCustomizationAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VehicleVisualCustomizationAsset](/vext/ref/fb/vehiclevisualcustomizationasset/).                                      |
| VehicleVisualCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleVisualCustomizationAsset](/vext/ref/fb/vehiclevisualcustomizationasset/). |

## Properties

| Name                         | Type                                                                       | Description |
| ---------------------------- | -------------------------------------------------------------------------- | ----------- |
| textureUnlockPartCollections | [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection/)\[\] |             |
| textUnlockParts              | [TextUnlockPartData](/vext/ref/fb/textunlockpartdata/)\[\]                               |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VehicleVisualCustomizationAsset](/vext/ref/fb/vehiclevisualcustomizationasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleVisualCustomizationAsset](/vext/ref/fb/vehiclevisualcustomizationasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
