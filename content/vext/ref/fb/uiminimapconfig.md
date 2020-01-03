---
title: UIMinimapConfig
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| UIMinimapConfig()                      | Create a new instance of this structure type.            |
| UIMinimapConfig(UIMinimapConfig other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type                                           | Description |
| ----------------------- | ---------------------------------------------- | ----------- |
| combatAreaCameraDelay   | number                                         |             |
| cameraInterpolationTime | number                                         |             |
| combatAreaFadeSpeed     | number                                         |             |
| zoomStates              | [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig/)\[\] |             |
| cameraPanSensitivity    | number                                         |             |
| minVelocity             | number                                         |             |
| maxVelocity             | number                                         |             |
| velocityModifier        | number                                         |             |
| disableDefaultState     | bool                                           |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [UIMinimapConfig](/vext/ref/fb/uiminimapconfig/) | [Clone](#clone) |            |

### Clone

> [UIMinimapConfig](/vext/ref/fb/uiminimapconfig/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
