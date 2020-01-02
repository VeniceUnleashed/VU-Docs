---
title: SubsystemTimingConfigData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                | Description                                              |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| SubsystemTimingConfigData()                                | Create a new instance of this structure type.            |
| SubsystemTimingConfigData(SubsystemTimingConfigData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| sensing            | number |             |
| evaluation         | number |             |
| goalUpdates        | number |             |
| intentUpdates      | number |             |
| behaviourSelection | number |             |
| behaviourExecution | number |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [SubsystemTimingConfigData](SubsystemTimingConfigData) | [Clone](#clone) |            |

### Clone

> [SubsystemTimingConfigData](SubsystemTimingConfigData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
