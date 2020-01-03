---
title: SoldierWeaponCustomizationAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponCustomizationAsset()                                                          | Create a new instance of this container type.                                                                                                         |
| SoldierWeaponCustomizationAsset(SoldierWeaponCustomizationAsset other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| SoldierWeaponCustomizationAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoldierWeaponCustomizationAsset](SoldierWeaponCustomizationAsset).                                      |
| SoldierWeaponCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponCustomizationAsset](SoldierWeaponCustomizationAsset). |

## Properties

| Name          | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| customization | [CustomizationTable](CustomizationTable) |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierWeaponCustomizationAsset](SoldierWeaponCustomizationAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponCustomizationAsset](SoldierWeaponCustomizationAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
