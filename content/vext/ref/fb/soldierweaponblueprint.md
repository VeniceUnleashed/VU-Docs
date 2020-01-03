---
title: SoldierWeaponBlueprint
---
### Base Classes

[ObjectBlueprint](/vext/ref/fb/objectblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponBlueprint()                                                          | Create a new instance of this container type.                                                                                       |
| SoldierWeaponBlueprint(SoldierWeaponBlueprint other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SoldierWeaponBlueprint([ObjectBlueprint](/vext/ref/fb/objectblueprint/) other)                  | Upcast an instance of type [ObjectBlueprint](/vext/ref/fb/objectblueprint/) to [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/).                  |
| SoldierWeaponBlueprint([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/).                              |
| SoldierWeaponBlueprint([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/).                      |
| SoldierWeaponBlueprint([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/).                          |
| SoldierWeaponBlueprint([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/).                                      |
| SoldierWeaponBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
