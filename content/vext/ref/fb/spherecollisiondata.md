---
title: SphereCollisionData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| SphereCollisionData()                          | Create a new instance of this structure type.            |
| SphereCollisionData(SphereCollisionData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                       | Type   | Description |
| -------------------------- | ------ | ----------- |
| extraRadius                | number |             |
| counterNormalBrakeForceMod | number |             |
| enabled                    | bool   |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [SphereCollisionData](SphereCollisionData) | [Clone](#clone) |            |

### Clone

> [SphereCollisionData](SphereCollisionData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
