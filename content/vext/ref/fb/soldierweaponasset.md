---
title: SoldierWeaponAsset
---
### Base Classes

[SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponAsset()                                                          | Create a new instance of this container type.                                                                               |
| SoldierWeaponAsset(SoldierWeaponAsset other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SoldierWeaponAsset([SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/) other)    | Upcast an instance of type [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/) to [SoldierWeaponAsset](/vext/ref/fb/soldierweaponasset/).    |
| SoldierWeaponAsset([ObjectBlueprint](/vext/ref/fb/objectblueprint/) other)                  | Upcast an instance of type [ObjectBlueprint](/vext/ref/fb/objectblueprint/) to [SoldierWeaponAsset](/vext/ref/fb/soldierweaponasset/).                  |
| SoldierWeaponAsset([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [SoldierWeaponAsset](/vext/ref/fb/soldierweaponasset/).                              |
| SoldierWeaponAsset([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [SoldierWeaponAsset](/vext/ref/fb/soldierweaponasset/).                      |
| SoldierWeaponAsset([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [SoldierWeaponAsset](/vext/ref/fb/soldierweaponasset/).                          |
| SoldierWeaponAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoldierWeaponAsset](/vext/ref/fb/soldierweaponasset/).                                      |
| SoldierWeaponAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponAsset](/vext/ref/fb/soldierweaponasset/). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierWeaponAsset](/vext/ref/fb/soldierweaponasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponAsset](/vext/ref/fb/soldierweaponasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
