---
title: ActionSuppressor
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| ActionSuppressor()                       | Create a new instance of this structure type.            |
| ActionSuppressor(ActionSuppressor other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type                                         | Description |
| ---------------- | -------------------------------------------- | ----------- |
| actionToSuppress | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| suppressingValue | number                                       |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [ActionSuppressor](/vext/ref/fb/actionsuppressor/) | [Clone](#clone) |            |

### Clone

> [ActionSuppressor](/vext/ref/fb/actionsuppressor/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
