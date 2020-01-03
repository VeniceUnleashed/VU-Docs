---
title: WeaponDeployTimeModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponDeployTimeModifier()                                                          | Create a new instance of this container type.                                                                                           |
| WeaponDeployTimeModifier(WeaponDeployTimeModifier other)                            | Create a reference copy of an instance of the same type.                                                                                |
| WeaponDeployTimeModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponDeployTimeModifier](/vext/ref/fb/weapondeploytimemodifier/).            |
| WeaponDeployTimeModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponDeployTimeModifier](/vext/ref/fb/weapondeploytimemodifier/). |

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
| [WeaponDeployTimeModifier](/vext/ref/fb/weapondeploytimemodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponDeployTimeModifier](/vext/ref/fb/weapondeploytimemodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
