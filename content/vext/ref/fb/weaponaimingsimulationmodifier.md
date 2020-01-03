---
title: WeaponAimingSimulationModifier
---
### Base Classes

[WeaponModifierBase](WeaponModifierBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponAimingSimulationModifier()                                                          | Create a new instance of this container type.                                                                                                       |
| WeaponAimingSimulationModifier(WeaponAimingSimulationModifier other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| WeaponAimingSimulationModifier([WeaponModifierBase](WeaponModifierBase) other)            | Upcast an instance of type [WeaponModifierBase](WeaponModifierBase) to [WeaponAimingSimulationModifier](WeaponAimingSimulationModifier).            |
| WeaponAimingSimulationModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponAimingSimulationModifier](WeaponAimingSimulationModifier). |

## Properties

| Name             | Type                                                       | Description |
| ---------------- | ---------------------------------------------------------- | ----------- |
| aimingController | [SoldierAimingSimulationData](SoldierAimingSimulationData) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponAimingSimulationModifier](WeaponAimingSimulationModifier) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponAimingSimulationModifier](WeaponAimingSimulationModifier) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
