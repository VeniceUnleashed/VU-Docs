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
| animationTriggers         | [InspectAnimationTriggerData](InspectAnimationTriggerData)\[\] |             |
| continuousAnimationSignal | [AntRef](AntRef)\[\]                                           |             |
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
| [InspectViewPointData](InspectViewPointData) | [Clone](#clone) |            |

### Clone

> [InspectViewPointData](InspectViewPointData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
