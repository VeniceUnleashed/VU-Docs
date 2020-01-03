---
title: WeaponAimingSimulationModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponAimingSimulationModifier()                                                          | Create a new instance of this container type.                                                                                                       |
| WeaponAimingSimulationModifier(WeaponAimingSimulationModifier other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| WeaponAimingSimulationModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier/).            |
| WeaponAimingSimulationModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier/). |

## Properties

| Name             | Type                                                       | Description |
| ---------------- | ---------------------------------------------------------- | ----------- |
| aimingController | [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata/) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
