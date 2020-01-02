---
title: VehicleVisualCustomizationAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleVisualCustomizationAsset()                                                          | Create a new instance of this container type.                                                                                                         |
| VehicleVisualCustomizationAsset(VehicleVisualCustomizationAsset other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| VehicleVisualCustomizationAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [VehicleVisualCustomizationAsset](VehicleVisualCustomizationAsset).                                      |
| VehicleVisualCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleVisualCustomizationAsset](VehicleVisualCustomizationAsset). |

## Properties

| Name                         | Type                                                                       | Description |
| ---------------------------- | -------------------------------------------------------------------------- | ----------- |
| textureUnlockPartCollections | [ShaderTextureUnlockPartCollection](ShaderTextureUnlockPartCollection)\[\] |             |
| textUnlockParts              | [TextUnlockPartData](TextUnlockPartData)\[\]                               |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VehicleVisualCustomizationAsset](VehicleVisualCustomizationAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleVisualCustomizationAsset](VehicleVisualCustomizationAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
