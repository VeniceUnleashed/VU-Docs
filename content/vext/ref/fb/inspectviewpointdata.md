---
title: InspectViewPointData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| InspectViewPointData()                           | Create a new instance of this structure type.            |
| InspectViewPointData(InspectViewPointData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                      | Type                                                           | Description |
| ------------------------- | -------------------------------------------------------------- | ----------- |
| viewPointID               | string                                                         |             |
| animationTriggers         | [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata/)\[\] |             |
| continuousAnimationSignal | [AntRef](/vext/ref/fb/antref/)\[\]                                           |             |
| lookAtHeight              | number                                                         |             |
| yaw                       | number                                                         |             |
| pitch                     | number                                                         |             |
| distance                  | number                                                         |             |
| fovOffset                 | number                                                         |             |
| adjustmentYaw             | number                                                         |             |
| fixed                     | bool                                                           |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [InspectViewPointData](/vext/ref/fb/inspectviewpointdata/) | [Clone](#clone) |            |

### Clone

> [InspectViewPointData](/vext/ref/fb/inspectviewpointdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
