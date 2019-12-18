---
title: OnlineEnvironmentUrlData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                              | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- |
| OnlineEnvironmentUrlData()                               | Create a new instance of this structure type.            |
| OnlineEnvironmentUrlData(OnlineEnvironmentUrlData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type                                   | Description |
| ----------- | -------------------------------------- | ----------- |
| url         | string                                 |             |
| environment | [OnlineEnvironment](OnlineEnvironment) |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [OnlineEnvironmentUrlData](OnlineEnvironmentUrlData) | [Clone](#clone) |            |

### Clone

> [OnlineEnvironmentUrlData](OnlineEnvironmentUrlData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
