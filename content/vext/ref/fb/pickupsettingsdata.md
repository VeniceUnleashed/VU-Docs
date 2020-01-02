---
title: PickupSettingsData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| PickupSettingsData()                         | Create a new instance of this structure type.            |
| PickupSettingsData(PickupSettingsData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                              | Description |
| ------------------ | --------------------------------- | ----------- |
| meshRenderOffset   | [Vec3](/vext/ref/shared/class/Vec3) |             |
| meshRenderRotation | [Vec3](/vext/ref/shared/class/Vec3) |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [PickupSettingsData](PickupSettingsData) | [Clone](#clone) |            |

### Clone

> [PickupSettingsData](PickupSettingsData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
