---
title: CameraBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| CameraBinding()                    | Create a new instance of this structure type.            |
| CameraBinding(CameraBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                      | Type             | Description |
| ------------------------- | ---------------- | ----------- |
| render1pInBackground      | [AntRef](/vext/ref/fb/antref/) |             |
| forceRender1pInForeground | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [CameraBinding](/vext/ref/fb/camerabinding/) | [Clone](#clone) |            |

### Clone

> [CameraBinding](/vext/ref/fb/camerabinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
