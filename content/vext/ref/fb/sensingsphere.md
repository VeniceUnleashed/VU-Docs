---
title: SensingSphere
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| SensingSphere()                    | Create a new instance of this structure type.            |
| SensingSphere(SensingSphere other) | Create a reference copy of a structure of the same type. |

## Properties

| Name      | Type                              | Description |
| --------- | --------------------------------- | ----------- |
| position  | [Vec3](/vext/ref/shared/class/Vec3) |             |
| radiusSqr | number                            |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [SensingSphere](SensingSphere) | [Clone](#clone) |            |

### Clone

> [SensingSphere](SensingSphere) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
