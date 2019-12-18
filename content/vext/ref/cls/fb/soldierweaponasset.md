---
title: SoldierWeaponAsset (Frostbite Container)
---
### Base Classes

[SoldierWeaponBlueprint](SoldierWeaponBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponAsset()                                                          | Create a new instance of this container type.                                                                               |
| SoldierWeaponAsset(SoldierWeaponAsset other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SoldierWeaponAsset([SoldierWeaponBlueprint](SoldierWeaponBlueprint) other)    | Upcast an instance of type [SoldierWeaponBlueprint](SoldierWeaponBlueprint) to [SoldierWeaponAsset](SoldierWeaponAsset).    |
| SoldierWeaponAsset([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [SoldierWeaponAsset](SoldierWeaponAsset).                  |
| SoldierWeaponAsset([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [SoldierWeaponAsset](SoldierWeaponAsset).                              |
| SoldierWeaponAsset([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [SoldierWeaponAsset](SoldierWeaponAsset).                      |
| SoldierWeaponAsset([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [SoldierWeaponAsset](SoldierWeaponAsset).                          |
| SoldierWeaponAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoldierWeaponAsset](SoldierWeaponAsset).                                      |
| SoldierWeaponAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierWeaponAsset](SoldierWeaponAsset). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierWeaponAsset](SoldierWeaponAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierWeaponAsset](SoldierWeaponAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
