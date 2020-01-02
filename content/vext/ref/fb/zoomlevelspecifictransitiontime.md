---
title: ZoomLevelSpecificTransitionTime
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                            | Description                                              |
| ---------------------------------------------------------------------- | -------------------------------------------------------- |
| ZoomLevelSpecificTransitionTime()                                      | Create a new instance of this structure type.            |
| ZoomLevelSpecificTransitionTime(ZoomLevelSpecificTransitionTime other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| fromZoomLevel      | number |             |
| toZoomLevel        | number |             |
| zoomTransitionTime | number |             |
| fovTransitionTime  | number |             |

## Methods

| Type                                                               | Name            | Parameters |
| ------------------------------------------------------------------ | --------------- | ---------- |
| [ZoomLevelSpecificTransitionTime](ZoomLevelSpecificTransitionTime) | [Clone](#clone) |            |

### Clone

> [ZoomLevelSpecificTransitionTime](ZoomLevelSpecificTransitionTime) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
