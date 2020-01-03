---
title: BFServerConfigurationData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                | Description                                              |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| BFServerConfigurationData()                                | Create a new instance of this structure type.            |
| BFServerConfigurationData(BFServerConfigurationData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| scoreMultiplier | number |             |
| licenses        | string |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [BFServerConfigurationData](BFServerConfigurationData) | [Clone](#clone) |            |

### Clone

> [BFServerConfigurationData](BFServerConfigurationData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
