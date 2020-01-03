---
title: SpringData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| SpringData()                 | Create a new instance of this structure type.            |
| SpringData(SpringData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| length                  | number |             |
| stiffness               | number |             |
| damping                 | number |             |
| maxSpringForce          | number |             |
| progressiveStartRatio   | number |             |
| progressiveExponent     | number |             |
| visualClipOffset        | number |             |
| attachOffsetY           | number |             |
| disabledStrenghModifier | number |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [SpringData](SpringData) | [Clone](#clone) |            |

### Clone

> [SpringData](SpringData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
