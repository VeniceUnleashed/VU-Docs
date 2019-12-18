---
title: SoldierCustomizationAsset (Frostbite Container)
---
### Base Classes

[CharacterCustomizationAsset](CharacterCustomizationAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| SoldierCustomizationAsset()                                                                 | Create a new instance of this container type.                                                                                                    |
| SoldierCustomizationAsset(SoldierCustomizationAsset other)                                  | Create a reference copy of an instance of the same type.                                                                                         |
| SoldierCustomizationAsset([CharacterCustomizationAsset](CharacterCustomizationAsset) other) | Upcast an instance of type [CharacterCustomizationAsset](CharacterCustomizationAsset) to [SoldierCustomizationAsset](SoldierCustomizationAsset). |
| SoldierCustomizationAsset([Asset](Asset) other)                                             | Upcast an instance of type [Asset](Asset) to [SoldierCustomizationAsset](SoldierCustomizationAsset).                                             |
| SoldierCustomizationAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other)        | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierCustomizationAsset](SoldierCustomizationAsset).        |

## Properties

| Name        | Type                                     | Description |
| ----------- | ---------------------------------------- | ----------- |
| weaponTable | [CustomizationTable](CustomizationTable) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierCustomizationAsset](SoldierCustomizationAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierCustomizationAsset](SoldierCustomizationAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
