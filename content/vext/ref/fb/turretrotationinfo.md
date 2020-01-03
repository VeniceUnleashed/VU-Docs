---
title: TurretRotationInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| TurretRotationInfo()                         | Create a new instance of this structure type.            |
| TurretRotationInfo(TurretRotationInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type                               | Description |
| ----------------- | ---------------------------------- | ----------- |
| rotationAxis      | [RotationAxis](/vext/ref/fb/rotationaxis/)       |             |
| channel           | [RotationChannel](/vext/ref/fb/rotationchannel/) |             |
| maxRotation       | number                             |             |
| minRotation       | number                             |             |
| phaseOffset       | number                             |             |
| normalizeRotation | bool                               |             |
| invertRotation    | bool                               |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [TurretRotationInfo](/vext/ref/fb/turretrotationinfo/) | [Clone](#clone) |            |

### Clone

> [TurretRotationInfo](/vext/ref/fb/turretrotationinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
