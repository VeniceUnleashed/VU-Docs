---
title: VeniceSoldierWeaponCustomizationAsset
---
### Base Classes

[SoldierWeaponCustomizationAsset](/vext/ref/fb/soldierweaponcustomizationasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                     | Description                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceSoldierWeaponCustomizationAsset()                                                                         | Create a new instance of this container type.                                                                                                                                    |
| VeniceSoldierWeaponCustomizationAsset(VeniceSoldierWeaponCustomizationAsset other)                              | Create a reference copy of an instance of the same type.                                                                                                                         |
| VeniceSoldierWeaponCustomizationAsset([SoldierWeaponCustomizationAsset](/vext/ref/fb/soldierweaponcustomizationasset/) other) | Upcast an instance of type [SoldierWeaponCustomizationAsset](/vext/ref/fb/soldierweaponcustomizationasset/) to [VeniceSoldierWeaponCustomizationAsset](/vext/ref/fb/venicesoldierweaponcustomizationasset/). |
| VeniceSoldierWeaponCustomizationAsset([Asset](/vext/ref/fb/asset/) other)                                                     | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [VeniceSoldierWeaponCustomizationAsset](/vext/ref/fb/venicesoldierweaponcustomizationasset/).                                                     |
| VeniceSoldierWeaponCustomizationAsset([DataContainer](/vext/ref/shared/class/datacontainer) other)                | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceSoldierWeaponCustomizationAsset](/vext/ref/fb/venicesoldierweaponcustomizationasset/).                |

## Methods

| Type                                                                           | Name            | Parameters                                     |
| ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceSoldierWeaponCustomizationAsset](/vext/ref/fb/venicesoldierweaponcustomizationasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceSoldierWeaponCustomizationAsset](/vext/ref/fb/venicesoldierweaponcustomizationasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
