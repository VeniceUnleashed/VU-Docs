---
title: EventConnection (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| EventConnection()                      | Create a new instance of this structure type.            |
| EventConnection(EventConnection other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type                                                   | Description |
| ----------- | ------------------------------------------------------ | ----------- |
| source      | [DataContainer](/vext/ref/cls/shr/DataContainer)    |             |
| target      | [DataContainer](/vext/ref/cls/shr/DataContainer)    |             |
| sourceEvent | [EventSpec](EventSpec)                                 |             |
| targetEvent | [EventSpec](EventSpec)                                 |             |
| targetType  | [EventConnectionTargetType](EventConnectionTargetType) |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [EventConnection](EventConnection) | [Clone](#clone) |            |

### Clone

> [EventConnection](EventConnection) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
