---
title: EditableActions (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| EditableActions()                      | Create a new instance of this structure type.            |
| EditableActions(EditableActions other) | Create a reference copy of a structure of the same type. |

## Properties

| Name    | Type                                 | Description |
| ------- | ------------------------------------ | ----------- |
| actions | [EditableAction](EditableAction)\[\] |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [EditableActions](EditableActions) | [Clone](#clone) |            |

### Clone

> [EditableActions](EditableActions) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
