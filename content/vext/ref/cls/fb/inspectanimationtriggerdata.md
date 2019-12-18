---
title: InspectAnimationTriggerData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| InspectAnimationTriggerData()                                  | Create a new instance of this structure type.            |
| InspectAnimationTriggerData(InspectAnimationTriggerData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type             | Description |
| ----------- | ---------------- | ----------- |
| animation   | [AntRef](AntRef) |             |
| probability | number           |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [InspectAnimationTriggerData](InspectAnimationTriggerData) | [Clone](#clone) |            |

### Clone

> [InspectAnimationTriggerData](InspectAnimationTriggerData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
