---
title: UIGPSPosition
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| UIGPSPosition()                    | Create a new instance of this structure type.            |
| UIGPSPosition(UIGPSPosition other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| latitude       | number |             |
| longitude      | number |             |
| seaLevelOffset | number |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [UIGPSPosition](UIGPSPosition) | [Clone](#clone) |            |

### Clone

> [UIGPSPosition](UIGPSPosition) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
