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
| rotationAxis      | [RotationAxis](RotationAxis)       |             |
| channel           | [RotationChannel](RotationChannel) |             |
| maxRotation       | number                             |             |
| minRotation       | number                             |             |
| phaseOffset       | number                             |             |
| normalizeRotation | bool                               |             |
| invertRotation    | bool                               |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [TurretRotationInfo](TurretRotationInfo) | [Clone](#clone) |            |

### Clone

> [TurretRotationInfo](TurretRotationInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
