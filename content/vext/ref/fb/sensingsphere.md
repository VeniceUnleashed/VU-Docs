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
| position  | [Vec3](/vext/ref/shared/class/vec3) |             |
| radiusSqr | number                            |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [SensingSphere](/vext/ref/fb/sensingsphere/) | [Clone](#clone) |            |

### Clone

> [SensingSphere](/vext/ref/fb/sensingsphere/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
