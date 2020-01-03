---
title: AILocoVaultTaskData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| AILocoVaultTaskData()                          | Create a new instance of this structure type.            |
| AILocoVaultTaskData(AILocoVaultTaskData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type                                   | Description |
| ----------------------- | -------------------------------------- | ----------- |
| startPoint              | [Vec3](/vext/ref/shared/class/vec3)      |             |
| distanceBeforeVault     | number                                 |             |
| heightBeforeVault       | number                                 |             |
| heightAfterVault        | number                                 |             |
| lengthOfVaultableObject | number                                 |             |
| worldAngle              | number                                 |             |
| distanceAfterVault      | number                                 |             |
| vaultType               | [WaypointVaultType](/vext/ref/fb/waypointvaulttype/) |             |
| useClientPosition       | bool                                   |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata/) | [Clone](#clone) |            |

### Clone

> [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
