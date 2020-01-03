---
title: EventScaleData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| EventScaleData()                     | Create a new instance of this structure type.            |
| EventScaleData(EventScaleData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type                   | Description |
| ----- | ---------------------- | ----------- |
| event | [StatEvent](/vext/ref/fb/statevent/) |             |
| scale | number                 |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [EventScaleData](/vext/ref/fb/eventscaledata/) | [Clone](#clone) |            |

### Clone

> [EventScaleData](/vext/ref/fb/eventscaledata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
