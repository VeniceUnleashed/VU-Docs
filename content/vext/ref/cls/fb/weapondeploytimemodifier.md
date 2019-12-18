---
title: WeaponDeployTimeModifier (Frostbite Container)
---
### Base Classes

[WeaponModifierBase](WeaponModifierBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponDeployTimeModifier()                                                          | Create a new instance of this container type.                                                                                           |
| WeaponDeployTimeModifier(WeaponDeployTimeModifier other)                            | Create a reference copy of an instance of the same type.                                                                                |
| WeaponDeployTimeModifier([WeaponModifierBase](WeaponModifierBase) other)            | Upcast an instance of type [WeaponModifierBase](WeaponModifierBase) to [WeaponDeployTimeModifier](WeaponDeployTimeModifier).            |
| WeaponDeployTimeModifier([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponDeployTimeModifier](WeaponDeployTimeModifier). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| deployTime              | number |             |
| disableZoomOnDeployTime | number |             |
| altDeployTime           | number |             |
| altDeployId             | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponDeployTimeModifier](WeaponDeployTimeModifier) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponDeployTimeModifier](WeaponDeployTimeModifier) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
