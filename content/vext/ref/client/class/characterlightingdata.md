---
title: CharacterLightingData
---
## Description

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| CharacterLightingData()                            | Create a new instance of this container type.            |
| CharacterLightingData(CharacterLightingData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name                  | Type                                                               | Description |
| --------------------- | ------------------------------------------------------------------ | ----------- |
| bottomLight           | [Vec3](/vext/ref/shared/class/vec3)                                  |             |
| topLight              | [Vec3](/vext/ref/shared/class/vec3)                                  |             |
| characterLightingMode | [CharacterLightingMode](/vext/ref/fb/characterlightingmode) |             |
| cameraUpRotation      | number                                                             |             |
| topLightDirY          | number                                                             |             |
| blendFactor           | number                                                             |             |
| topLightDirX          | number                                                             |             |
| lockToCameraDirection | bool                                                               |             |
| firstPersonEnable     | bool                                                               |             |
| characterLightEnable  | bool                                                               |             |

## Methods

| Type                                                                | Name            | Parameters |
| ------------------------------------------------------------------- | --------------- | ---------- |
| [CharacterLightingData](/vext/ref/client/class/characterlightingdata) | [Clone](#clone) |            |

### Clone

> [CharacterLightingData](/vext/ref/client/class/characterlightingdata) **Clone**()

Creates a shallow-copy clone of the instance.
