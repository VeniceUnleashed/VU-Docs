---
title: MinimapData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                    | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| MinimapData()                  | Create a new instance of this structure type.            |
| MinimapData(MinimapData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| position            | [Vec2](/vext/ref/cls/shr/Vec2) |             |
| cameraPosition      | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| size                | [Vec2](/vext/ref/cls/shr/Vec2) |             |
| overlayColor        | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| anchorPosVertical   | number                            |             |
| anchorPosHorizontal | number                            |             |
| cameraLookDistance  | number                            |             |
| cameraDistance      | number                            |             |
| cameraFov           | number                            |             |
| overlayAlpha        | number                            |             |
| cameraRotation      | number                            |             |
| startZoomLevel      | number                            |             |
| innerZoomFactor     | number                            |             |
| maxZoomLevels       | number                            |             |
| centerOnCombatArea  | bool                              |             |
| rotationFromPlayer  | bool                              |             |
| positionFromPlayer  | bool                              |             |

## Methods

| Type                       | Name            | Parameters |
| -------------------------- | --------------- | ---------- |
| [MinimapData](MinimapData) | [Clone](#clone) |            |

### Clone

> [MinimapData](MinimapData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
