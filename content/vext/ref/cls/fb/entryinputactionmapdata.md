---
title: EntryInputActionMapData (Frostbite Container)
---
### Base Classes

[InputActionMapData](InputActionMapData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| EntryInputActionMapData()                                                          | Create a new instance of this container type.                                                                                         |
| EntryInputActionMapData(EntryInputActionMapData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| EntryInputActionMapData([InputActionMapData](InputActionMapData) other)            | Upcast an instance of type [InputActionMapData](InputActionMapData) to [EntryInputActionMapData](EntryInputActionMapData).            |
| EntryInputActionMapData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EntryInputActionMapData](EntryInputActionMapData). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EntryInputActionMapData](EntryInputActionMapData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EntryInputActionMapData](EntryInputActionMapData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
