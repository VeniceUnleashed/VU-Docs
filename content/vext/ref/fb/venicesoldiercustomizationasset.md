---
title: VeniceSoldierCustomizationAsset
---
### Base Classes

[SoldierCustomizationAsset](/vext/ref/fb/soldiercustomizationasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                       | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| VeniceSoldierCustomizationAsset()                                                                 | Create a new instance of this container type.                                                                                                                |
| VeniceSoldierCustomizationAsset(VeniceSoldierCustomizationAsset other)                            | Create a reference copy of an instance of the same type.                                                                                                     |
| VeniceSoldierCustomizationAsset([SoldierCustomizationAsset](/vext/ref/fb/soldiercustomizationasset/) other)     | Upcast an instance of type [SoldierCustomizationAsset](/vext/ref/fb/soldiercustomizationasset/) to [VeniceSoldierCustomizationAsset](/vext/ref/fb/venicesoldiercustomizationasset/).     |
| VeniceSoldierCustomizationAsset([CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset/) other) | Upcast an instance of type [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset/) to [VeniceSoldierCustomizationAsset](/vext/ref/fb/venicesoldiercustomizationasset/). |
| VeniceSoldierCustomizationAsset([Asset](/vext/ref/fb/asset/) other)                                             | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VeniceSoldierCustomizationAsset](/vext/ref/fb/venicesoldiercustomizationasset/).                                             |
| VeniceSoldierCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other)        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceSoldierCustomizationAsset](/vext/ref/fb/venicesoldiercustomizationasset/).        |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceSoldierCustomizationAsset](/vext/ref/fb/venicesoldiercustomizationasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceSoldierCustomizationAsset](/vext/ref/fb/venicesoldiercustomizationasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
