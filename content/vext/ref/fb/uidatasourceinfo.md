---
title: UIDataSourceInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| UIDataSourceInfo()                       | Create a new instance of this structure type.            |
| UIDataSourceInfo(UIDataSourceInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                               | Description |
| ------------------ | ---------------------------------- | ----------- |
| dataName           | string                             |             |
| dataCategory       | [UIComponentData](/vext/ref/fb/uicomponentdata/) |             |
| dataKey            | number                             |             |
| useDirectAccess    | bool                               |             |
| updateOnInitialize | bool                               |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) | [Clone](#clone) |            |

### Clone

> [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
