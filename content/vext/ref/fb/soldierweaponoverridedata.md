---
title: SoldierWeaponOverrideData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponOverrideData()                                                          | Create a new instance of this container type.                                                                                             |
| SoldierWeaponOverrideData(SoldierWeaponOverrideData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoldierWeaponOverrideData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponOverrideData](SoldierWeaponOverrideData). |

## Properties

| Name      | Type                                         | Description |
| --------- | -------------------------------------------- | ----------- |
| overrides | [WeaponOverrideData](WeaponOverrideData)\[\] |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierWeaponOverrideData](SoldierWeaponOverrideData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponOverrideData](SoldierWeaponOverrideData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
