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
| startPoint              | [Vec3](/vext/ref/shared/class/Vec3)      |             |
| distanceBeforeVault     | number                                 |             |
| heightBeforeVault       | number                                 |             |
| heightAfterVault        | number                                 |             |
| lengthOfVaultableObject | number                                 |             |
| worldAngle              | number                                 |             |
| distanceAfterVault      | number                                 |             |
| vaultType               | [WaypointVaultType](WaypointVaultType) |             |
| useClientPosition       | bool                                   |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [AILocoVaultTaskData](AILocoVaultTaskData) | [Clone](#clone) |            |

### Clone

> [AILocoVaultTaskData](AILocoVaultTaskData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
