---
title: SoldierCustomizationAsset
---
### Base Classes

[CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| SoldierCustomizationAsset()                                                                 | Create a new instance of this container type.                                                                                                    |
| SoldierCustomizationAsset(SoldierCustomizationAsset other)                                  | Create a reference copy of an instance of the same type.                                                                                         |
| SoldierCustomizationAsset([CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset/) other) | Upcast an instance of type [CharacterCustomizationAsset](/vext/ref/fb/charactercustomizationasset/) to [SoldierCustomizationAsset](/vext/ref/fb/soldiercustomizationasset/). |
| SoldierCustomizationAsset([Asset](/vext/ref/fb/asset/) other)                                             | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoldierCustomizationAsset](/vext/ref/fb/soldiercustomizationasset/).                                             |
| SoldierCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other)        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierCustomizationAsset](/vext/ref/fb/soldiercustomizationasset/).        |

## Properties

| Name        | Type                                     | Description |
| ----------- | ---------------------------------------- | ----------- |
| weaponTable | [CustomizationTable](/vext/ref/fb/customizationtable/) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierCustomizationAsset](/vext/ref/fb/soldiercustomizationasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierCustomizationAsset](/vext/ref/fb/soldiercustomizationasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
