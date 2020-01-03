---
title: EventConnection
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
| source      | [DataContainer](/vext/ref/shared/class/datacontainer)    |             |
| target      | [DataContainer](/vext/ref/shared/class/datacontainer)    |             |
| sourceEvent | [EventSpec](/vext/ref/fb/eventspec/)                                 |             |
| targetEvent | [EventSpec](/vext/ref/fb/eventspec/)                                 |             |
| targetType  | [EventConnectionTargetType](/vext/ref/fb/eventconnectiontargettype/) |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [EventConnection](/vext/ref/fb/eventconnection/) | [Clone](#clone) |            |

### Clone

> [EventConnection](/vext/ref/fb/eventconnection/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
