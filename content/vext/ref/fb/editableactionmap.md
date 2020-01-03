---
title: EditableActionMap
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| EditableActionMap()                        | Create a new instance of this structure type.            |
| EditableActionMap(EditableActionMap other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                                                 | Description |
| ------------------- | ---------------------------------------------------- | ----------- |
| id                  | string                                               |             |
| nameId              | string                                               |             |
| actionMap           | [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata/) |             |
| configurationLayout | [EditableActions](/vext/ref/fb/editableactions/)                   |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [EditableActionMap](/vext/ref/fb/editableactionmap/) | [Clone](#clone) |            |

### Clone

> [EditableActionMap](/vext/ref/fb/editableactionmap/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
