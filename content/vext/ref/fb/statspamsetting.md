---
title: StatSpamSetting
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| StatSpamSetting()                      | Create a new instance of this structure type.            |
| StatSpamSetting(StatSpamSetting other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                   | Description |
| -------------- | ---------------------- | ----------- |
| event          | [StatEvent](/vext/ref/fb/statevent/) |             |
| amountLimit    | number                 |             |
| timeLimit      | number                 |             |
| playerToPlayer | bool                   |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [StatSpamSetting](/vext/ref/fb/statspamsetting/) | [Clone](#clone) |            |

### Clone

> [StatSpamSetting](/vext/ref/fb/statspamsetting/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
