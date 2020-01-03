---
title: EdgeModelInstance
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| EdgeModelInstance()                        | Create a new instance of this structure type.            |
| EdgeModelInstance(EdgeModelInstance other) | Create a reference copy of a structure of the same type. |

## Properties

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| transform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [EdgeModelInstance](EdgeModelInstance) | [Clone](#clone) |            |

### Clone

> [EdgeModelInstance](EdgeModelInstance) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
