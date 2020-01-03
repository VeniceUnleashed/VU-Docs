---
title: MinimapCameraOffsetData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| MinimapCameraOffsetData()                              | Create a new instance of this structure type.            |
| MinimapCameraOffsetData(MinimapCameraOffsetData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name      | Type                              | Description |
| --------- | --------------------------------- | ----------- |
| position  | [Vec2](/vext/ref/shared/class/vec2) |             |
| cameraFov | number                            |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata/) | [Clone](#clone) |            |

### Clone

> [MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
