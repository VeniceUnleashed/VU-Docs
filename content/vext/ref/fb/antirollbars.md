---
title: AntiRollBars
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| AntiRollBars()                   | Create a new instance of this structure type.            |
| AntiRollBars(AntiRollBars other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type                       | Description |
| ----- | -------------------------- | ----------- |
| front | [AntiRollBar](/vext/ref/fb/antirollbar/) |             |
| rear  | [AntiRollBar](/vext/ref/fb/antirollbar/) |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [AntiRollBars](/vext/ref/fb/antirollbars/) | [Clone](#clone) |            |

### Clone

> [AntiRollBars](/vext/ref/fb/antirollbars/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
