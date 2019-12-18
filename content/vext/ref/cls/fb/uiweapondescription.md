---
title: UIWeaponDescription (Frostbite Container)
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIWeaponDescription()                                                          | Create a new instance of this container type.                                                                                 |
| UIWeaponDescription(UIWeaponDescription other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIWeaponDescription([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [UIWeaponDescription](UIWeaponDescription).              |
| UIWeaponDescription([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIWeaponDescription](UIWeaponDescription). |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| name                | string |             |
| unlockName          | string |             |
| description         | string |             |
| category            | string |             |
| texturePath         | string |             |
| iconTexturePath     | string |             |
| unlockTexturePath   | string |             |
| ammo                | string |             |
| rateOfFire          | string |             |
| range               | string |             |
| fireModeSingle      | bool   |             |
| fireModeBurst       | bool   |             |
| fireModeAuto        | bool   |             |
| hiddenInProgression | bool   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIWeaponDescription](UIWeaponDescription) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIWeaponDescription](UIWeaponDescription) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
