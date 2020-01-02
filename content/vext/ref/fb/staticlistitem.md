---
title: StaticListItem
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| StaticListItem()                     | Create a new instance of this structure type.            |
| StaticListItem(StaticListItem other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                                 | Description |
| ------------------- | ------------------------------------ | ----------- |
| itemName            | string                               |             |
| dynamicDisable      | [UIDataSourceInfo](UIDataSourceInfo) |             |
| dynamicNewContent   | [UIDataSourceInfo](UIDataSourceInfo) |             |
| appendPlatformToSID | bool                                 |             |
| excludeInRetail     | bool                                 |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [StaticListItem](StaticListItem) | [Clone](#clone) |            |

### Clone

> [StaticListItem](StaticListItem) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
