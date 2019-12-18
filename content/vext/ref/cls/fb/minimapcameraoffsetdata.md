---
title: MinimapCameraOffsetData (Frostbite Structure)
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
| position  | [Vec2](/vext/ref/cls/shr/Vec2) |             |
| cameraFov | number                            |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [MinimapCameraOffsetData](MinimapCameraOffsetData) | [Clone](#clone) |            |

### Clone

> [MinimapCameraOffsetData](MinimapCameraOffsetData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
