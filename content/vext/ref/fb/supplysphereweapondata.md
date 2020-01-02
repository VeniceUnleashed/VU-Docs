---
title: SupplySphereWeaponData
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SupplySphereWeaponData()                                                          | Create a new instance of this container type.                                                                                       |
| SupplySphereWeaponData(SupplySphereWeaponData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SupplySphereWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [SupplySphereWeaponData](SupplySphereWeaponData).                            |
| SupplySphereWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [SupplySphereWeaponData](SupplySphereWeaponData).                                |
| SupplySphereWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SupplySphereWeaponData](SupplySphereWeaponData). |

## Properties

| Name       | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| supplyData | [SupplyData](SupplyData) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SupplySphereWeaponData](SupplySphereWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SupplySphereWeaponData](SupplySphereWeaponData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
