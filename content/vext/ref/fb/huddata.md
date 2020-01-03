---
title: HudData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor            | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| HudData()              | Create a new instance of this structure type.            |
| HudData(HudData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                         | Type                                     | Description |
| ---------------------------- | ---------------------------------------- | ----------- |
| crosshairScaleMin            | number                                   |             |
| crosshairScaleMax            | number                                   |             |
| crosshairOpacityMin          | number                                   |             |
| crosshairOpacityMax          | number                                   |             |
| crosshairOpacityModifier     | number                                   |             |
| crosshairTypeId              | string                                   |             |
| weaponClass                  | string                                   |             |
| cameraShakeModifier          | number                                   |             |
| seaLevelAltFreq              | number                                   |             |
| lowAmmoWarning               | number                                   |             |
| reloadPrompt                 | number                                   |             |
| renderTargetIndex            | number                                   |             |
| hudPropertyList              | [UIPartPropertyList](/vext/ref/fb/uipartpropertylist/) |             |
| showMinimap                  | bool                                     |             |
| infiniteAmmo                 | bool                                     |             |
| hideCrosshairWhenAimOnFriend | bool                                     |             |
| hideAmmo                     | bool                                     |             |
| useRangeMeter                | bool                                     |             |
| usePredictedSight            | bool                                     |             |
| useWeaponOrientations        | bool                                     |             |
| useVelocityVectorMarker      | bool                                     |             |
| useLockingController         | bool                                     |             |
| useThrust                    | bool                                     |             |
| useGForce                    | bool                                     |             |
| useSkidSlip                  | bool                                     |             |
| useClimbRate                 | bool                                     |             |
| useAimWarning                | bool                                     |             |
| useRenderTarget              | bool                                     |             |

## Methods

| Type               | Name            | Parameters |
| ------------------ | --------------- | ---------- |
| [HudData](/vext/ref/fb/huddata/) | [Clone](#clone) |            |

### Clone

> [HudData](/vext/ref/fb/huddata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
