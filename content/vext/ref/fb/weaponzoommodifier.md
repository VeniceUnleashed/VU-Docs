---
title: WeaponZoomModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| WeaponZoomModifier()                                                          | Create a new instance of this container type.                                                                               |
| WeaponZoomModifier(WeaponZoomModifier other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| WeaponZoomModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponZoomModifier](/vext/ref/fb/weaponzoommodifier/).            |
| WeaponZoomModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponZoomModifier](/vext/ref/fb/weaponzoommodifier/). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| zoomRenderFov | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponZoomModifier](/vext/ref/fb/weaponzoommodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponZoomModifier](/vext/ref/fb/weaponzoommodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
