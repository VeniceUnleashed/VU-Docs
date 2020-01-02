---
title: EntityUid
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| EntityUid()                | Create a new instance of this structure type.            |
| EntityUid(EntityUid other) | Create a reference copy of a structure of the same type. |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| id   | number |             |

## Methods

| Type                   | Name            | Parameters |
| ---------------------- | --------------- | ---------- |
| [EntityUid](EntityUid) | [Clone](#clone) |            |

### Clone

> [EntityUid](EntityUid) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
