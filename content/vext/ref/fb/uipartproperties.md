---
title: UIPartProperties
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| UIPartProperties()                       | Create a new instance of this structure type.            |
| UIPartProperties(UIPartProperties other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type                                 | Description |
| ------------------ | ------------------------------------ | ----------- |
| identifier         | [UIPartIdentifier](UIPartIdentifier) |             |
| range              | number                               |             |
| frequency          | number                               |             |
| compensateFreelook | bool                                 |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [UIPartProperties](UIPartProperties) | [Clone](#clone) |            |

### Clone

> [UIPartProperties](UIPartProperties) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
