---
title: UILevelSpecificPageHeader (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                | Description                                              |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| UILevelSpecificPageHeader()                                | Create a new instance of this structure type.            |
| UILevelSpecificPageHeader(UILevelSpecificPageHeader other) | Create a reference copy of a structure of the same type. |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| levelNameSID | string |             |
| header       | string |             |
| subHeader    | string |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [UILevelSpecificPageHeader](UILevelSpecificPageHeader) | [Clone](#clone) |            |

### Clone

> [UILevelSpecificPageHeader](UILevelSpecificPageHeader) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
