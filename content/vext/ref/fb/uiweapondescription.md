---
title: UIWeaponDescription
---
### Base Classes

[UIItemDescription](/vext/ref/fb/uiitemdescription/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIWeaponDescription()                                                          | Create a new instance of this container type.                                                                                 |
| UIWeaponDescription(UIWeaponDescription other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIWeaponDescription([UIItemDescription](/vext/ref/fb/uiitemdescription/) other)              | Upcast an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription/) to [UIWeaponDescription](/vext/ref/fb/uiweapondescription/).              |
| UIWeaponDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIWeaponDescription](/vext/ref/fb/uiweapondescription/). |

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
| [UIWeaponDescription](/vext/ref/fb/uiweapondescription/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIWeaponDescription](/vext/ref/fb/uiweapondescription/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
