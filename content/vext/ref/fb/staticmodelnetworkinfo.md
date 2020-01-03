---
title: StaticModelNetworkInfo
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
| partNetworkIdRanges | [IndexRange](/vext/ref/fb/indexrange/)\[\]                                   |             |
| networkIdCount      | number                                                         |             |
| childNetworkInfos   | [ChildStaticModelNetworkInfo](/vext/ref/fb/childstaticmodelnetworkinfo/)\[\] |             |
| childNetworkIdCount | number                                                         |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [StaticModelNetworkInfo](/vext/ref/fb/staticmodelnetworkinfo/) | [Clone](#clone) |            |

### Clone

> [StaticModelNetworkInfo](/vext/ref/fb/staticmodelnetworkinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
