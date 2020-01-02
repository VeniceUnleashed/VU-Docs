---
title: DebrisClusterPartInfoData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                | Description                                              |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| DebrisClusterPartInfoData()                                | Create a new instance of this structure type.            |
| DebrisClusterPartInfoData(DebrisClusterPartInfoData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| angularVelocity     | [Vec3](/vext/ref/shared/class/Vec3) |             |
| linearVelocity      | [Vec3](/vext/ref/shared/class/Vec3) |             |
| numberOfChildren    | number                            |             |
| partIndex           | number                            |             |
| splitSpeedThreshold | number                            |             |
| inEffectWorldOnly   | bool                              |             |
| syncRestPosition    | bool                              |             |
| syncContinous       | bool                              |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [DebrisClusterPartInfoData](DebrisClusterPartInfoData) | [Clone](#clone) |            |

### Clone

> [DebrisClusterPartInfoData](DebrisClusterPartInfoData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
