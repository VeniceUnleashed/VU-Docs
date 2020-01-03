---
title: AntDynamicAvoidanceBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| AntDynamicAvoidanceBinding()                                 | Create a new instance of this structure type.            |
| AntDynamicAvoidanceBinding(AntDynamicAvoidanceBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type             | Description |
| ---------------------- | ---------------- | ----------- |
| timeUntilCollision     | [AntRef](/vext/ref/fb/antref/) |             |
| distanceUntilCollision | [AntRef](/vext/ref/fb/antref/) |             |
| normalizedVelocity     | [AntRef](/vext/ref/fb/antref/) |             |
| speed                  | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [AntDynamicAvoidanceBinding](/vext/ref/fb/antdynamicavoidancebinding/) | [Clone](#clone) |            |

### Clone

> [AntDynamicAvoidanceBinding](/vext/ref/fb/antdynamicavoidancebinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
