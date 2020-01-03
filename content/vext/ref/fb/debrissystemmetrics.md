---
title: DebrisSystemMetrics
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| DebrisSystemMetrics()                          | Create a new instance of this structure type.            |
| DebrisSystemMetrics(DebrisSystemMetrics other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type   | Description |
| ---------------------- | ------ | ----------- |
| havokParticleCount     | number |             |
| havokParticlePartCount | number |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics/) | [Clone](#clone) |            |

### Clone

> [DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
