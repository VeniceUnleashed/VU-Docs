---
title: CustomizeVisual (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| CustomizeVisual()                      | Create a new instance of this structure type.            |
| CustomizeVisual(CustomizeVisual other) | Create a reference copy of a structure of the same type. |

## Properties

| Name   | Type                           | Description |
| ------ | ------------------------------ | ----------- |
| visual | [UnlockAsset](UnlockAsset)\[\] |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [CustomizeVisual](CustomizeVisual) | [Clone](#clone) |            |

### Clone

> [CustomizeVisual](CustomizeVisual) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
