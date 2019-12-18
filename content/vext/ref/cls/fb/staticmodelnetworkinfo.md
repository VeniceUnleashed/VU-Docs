---
title: StaticModelNetworkInfo (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| StaticModelNetworkInfo()                             | Create a new instance of this structure type.            |
| StaticModelNetworkInfo(StaticModelNetworkInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                                                           | Description |
| ------------------- | -------------------------------------------------------------- | ----------- |
| partNetworkIdRanges | [IndexRange](IndexRange)\[\]                                   |             |
| networkIdCount      | number                                                         |             |
| childNetworkInfos   | [ChildStaticModelNetworkInfo](ChildStaticModelNetworkInfo)\[\] |             |
| childNetworkIdCount | number                                                         |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [StaticModelNetworkInfo](StaticModelNetworkInfo) | [Clone](#clone) |            |

### Clone

> [StaticModelNetworkInfo](StaticModelNetworkInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
