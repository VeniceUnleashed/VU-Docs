---
title: ChildStaticModelNetworkInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| ChildStaticModelNetworkInfo()                                  | Create a new instance of this structure type.            |
| ChildStaticModelNetworkInfo(ChildStaticModelNetworkInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                     | Type                     | Description |
| ------------------------ | ------------------------ | ----------- |
| networkRange             | [IndexRange](/vext/ref/fb/indexrange/) |             |
| parentPartComponentIndex | number                   |             |
| parentHealthStateIndex   | number                   |             |
| instanceIndex            | number                   |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [ChildStaticModelNetworkInfo](/vext/ref/fb/childstaticmodelnetworkinfo/) | [Clone](#clone) |            |

### Clone

> [ChildStaticModelNetworkInfo](/vext/ref/fb/childstaticmodelnetworkinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
