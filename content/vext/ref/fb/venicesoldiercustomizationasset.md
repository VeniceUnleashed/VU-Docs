---
title: VeniceSoldierCustomizationAsset
---
### Base Classes

[SoldierCustomizationAsset](SoldierCustomizationAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                       | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| VeniceSoldierCustomizationAsset()                                                                 | Create a new instance of this container type.                                                                                                                |
| VeniceSoldierCustomizationAsset(VeniceSoldierCustomizationAsset other)                            | Create a reference copy of an instance of the same type.                                                                                                     |
| VeniceSoldierCustomizationAsset([SoldierCustomizationAsset](SoldierCustomizationAsset) other)     | Upcast an instance of type [SoldierCustomizationAsset](SoldierCustomizationAsset) to [VeniceSoldierCustomizationAsset](VeniceSoldierCustomizationAsset).     |
| VeniceSoldierCustomizationAsset([CharacterCustomizationAsset](CharacterCustomizationAsset) other) | Upcast an instance of type [CharacterCustomizationAsset](CharacterCustomizationAsset) to [VeniceSoldierCustomizationAsset](VeniceSoldierCustomizationAsset). |
| VeniceSoldierCustomizationAsset([Asset](Asset) other)                                             | Upcast an instance of type [Asset](Asset) to [VeniceSoldierCustomizationAsset](VeniceSoldierCustomizationAsset).                                             |
| VeniceSoldierCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other)        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceSoldierCustomizationAsset](VeniceSoldierCustomizationAsset).        |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceSoldierCustomizationAsset](VeniceSoldierCustomizationAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceSoldierCustomizationAsset](VeniceSoldierCustomizationAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
