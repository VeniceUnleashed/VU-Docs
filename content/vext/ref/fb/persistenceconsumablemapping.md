---
title: PersistenceConsumableMapping
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| PersistenceConsumableMapping()                                   | Create a new instance of this structure type.            |
| PersistenceConsumableMapping(PersistenceConsumableMapping other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type                               | Description |
| ----- | ---------------------------------- | ----------- |
| group | [ConsumableGroup](ConsumableGroup) |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [PersistenceConsumableMapping](PersistenceConsumableMapping) | [Clone](#clone) |            |

### Clone

> [PersistenceConsumableMapping](PersistenceConsumableMapping) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
