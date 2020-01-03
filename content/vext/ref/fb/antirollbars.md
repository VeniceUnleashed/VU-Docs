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
| front | [AntiRollBar](AntiRollBar) |             |
| rear  | [AntiRollBar](AntiRollBar) |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [AntiRollBars](AntiRollBars) | [Clone](#clone) |            |

### Clone

> [AntiRollBars](AntiRollBars) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
