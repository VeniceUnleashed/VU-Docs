---
title: SoldierWeaponCustomizationAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponCustomizationAsset()                                                          | Create a new instance of this container type.                                                                                                         |
| SoldierWeaponCustomizationAsset(SoldierWeaponCustomizationAsset other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| SoldierWeaponCustomizationAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoldierWeaponCustomizationAsset](/vext/ref/fb/soldierweaponcustomizationasset/).                                      |
| SoldierWeaponCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponCustomizationAsset](/vext/ref/fb/soldierweaponcustomizationasset/). |

## Properties

| Name          | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| customization | [CustomizationTable](/vext/ref/fb/customizationtable/) |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierWeaponCustomizationAsset](/vext/ref/fb/soldierweaponcustomizationasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponCustomizationAsset](/vext/ref/fb/soldierweaponcustomizationasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
