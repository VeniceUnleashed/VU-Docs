---
title: OnlineEnvironmentUrlData
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
| environment | [OnlineEnvironment](/vext/ref/fb/onlineenvironment/) |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata/) | [Clone](#clone) |            |

### Clone

> [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
