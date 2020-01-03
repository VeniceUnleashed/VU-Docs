---
title: BFServerConfigurationSchedule
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                        | Description                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| BFServerConfigurationSchedule()                                    | Create a new instance of this structure type.            |
| BFServerConfigurationSchedule(BFServerConfigurationSchedule other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                                                   | Description |
| -------- | ------------------------------------------------------ | ----------- |
| licenses | string\[\]                                             |             |
| levels   | string\[\]                                             |             |
| data     | [BFServerConfigurationData](BFServerConfigurationData) |             |

## Methods

| Type                                                           | Name            | Parameters |
| -------------------------------------------------------------- | --------------- | ---------- |
| [BFServerConfigurationSchedule](BFServerConfigurationSchedule) | [Clone](#clone) |            |

### Clone

> [BFServerConfigurationSchedule](BFServerConfigurationSchedule) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
