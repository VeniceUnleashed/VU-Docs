---
title: StanceCameraData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| StanceCameraData()                       | Create a new instance of this structure type.            |
| StanceCameraData(StanceCameraData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type       | Description |
| ----------------------- | ---------- | ----------- |
| validStances            | number\[\] |             |
| defaultCameraForStances | number\[\] |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [StanceCameraData](StanceCameraData) | [Clone](#clone) |            |

### Clone

> [StanceCameraData](StanceCameraData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
