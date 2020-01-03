---
title: EntryInputActionMapData
---
### Base Classes

[InputActionMapData](/vext/ref/fb/inputactionmapdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| EntryInputActionMapData()                                                          | Create a new instance of this container type.                                                                                         |
| EntryInputActionMapData(EntryInputActionMapData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| EntryInputActionMapData([InputActionMapData](/vext/ref/fb/inputactionmapdata/) other)            | Upcast an instance of type [InputActionMapData](/vext/ref/fb/inputactionmapdata/) to [EntryInputActionMapData](/vext/ref/fb/entryinputactionmapdata/).            |
| EntryInputActionMapData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntryInputActionMapData](/vext/ref/fb/entryinputactionmapdata/). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EntryInputActionMapData](/vext/ref/fb/entryinputactionmapdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntryInputActionMapData](/vext/ref/fb/entryinputactionmapdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
