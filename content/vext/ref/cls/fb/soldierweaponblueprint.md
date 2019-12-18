---
title: SoldierWeaponBlueprint (Frostbite Container)
---
### Base Classes

[ObjectBlueprint](ObjectBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponBlueprint()                                                          | Create a new instance of this container type.                                                                                       |
| SoldierWeaponBlueprint(SoldierWeaponBlueprint other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SoldierWeaponBlueprint([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [SoldierWeaponBlueprint](SoldierWeaponBlueprint).                  |
| SoldierWeaponBlueprint([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [SoldierWeaponBlueprint](SoldierWeaponBlueprint).                              |
| SoldierWeaponBlueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [SoldierWeaponBlueprint](SoldierWeaponBlueprint).                      |
| SoldierWeaponBlueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [SoldierWeaponBlueprint](SoldierWeaponBlueprint).                          |
| SoldierWeaponBlueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoldierWeaponBlueprint](SoldierWeaponBlueprint).                                      |
| SoldierWeaponBlueprint([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierWeaponBlueprint](SoldierWeaponBlueprint). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierWeaponBlueprint](SoldierWeaponBlueprint) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierWeaponBlueprint](SoldierWeaponBlueprint) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
