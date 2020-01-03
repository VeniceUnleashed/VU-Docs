---
title: EntryInputActionMappingData
---
### Base Classes

[InputActionMappingData](/vext/ref/fb/inputactionmappingdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| EntryInputActionMappingData()                                                          | Create a new instance of this container type.                                                                                                 |
| EntryInputActionMappingData(EntryInputActionMappingData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| EntryInputActionMappingData([InputActionMappingData](/vext/ref/fb/inputactionmappingdata/) other)    | Upcast an instance of type [InputActionMappingData](/vext/ref/fb/inputactionmappingdata/) to [EntryInputActionMappingData](/vext/ref/fb/entryinputactionmappingdata/).    |
| EntryInputActionMappingData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntryInputActionMappingData](/vext/ref/fb/entryinputactionmappingdata/). |

## Properties

| Name              | Type                                               | Description |
| ----------------- | -------------------------------------------------- | ----------- |
| actionIdentifier  | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)       |             |
| conceptIdentifier | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers/) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EntryInputActionMappingData](/vext/ref/fb/entryinputactionmappingdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntryInputActionMappingData](/vext/ref/fb/entryinputactionmappingdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
