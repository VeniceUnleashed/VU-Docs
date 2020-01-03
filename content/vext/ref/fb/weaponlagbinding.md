---
title: WeaponLagBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| WeaponLagBinding()                       | Create a new instance of this structure type.            |
| WeaponLagBinding(WeaponLagBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type             | Description |
| ----------- | ---------------- | ----------- |
| entityPitch | [AntRef](/vext/ref/fb/antref/) |             |
| entityYaw   | [AntRef](/vext/ref/fb/antref/) |             |
| pitchResult | [AntRef](/vext/ref/fb/antref/) |             |
| yawResult   | [AntRef](/vext/ref/fb/antref/) |             |
| rollResult  | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [WeaponLagBinding](/vext/ref/fb/weaponlagbinding/) | [Clone](#clone) |            |

### Clone

> [WeaponLagBinding](/vext/ref/fb/weaponlagbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
