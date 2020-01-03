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
| render1pInBackground      | [AntRef](AntRef) |             |
| forceRender1pInForeground | [AntRef](AntRef) |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [CameraBinding](CameraBinding) | [Clone](#clone) |            |

### Clone

> [CameraBinding](CameraBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
