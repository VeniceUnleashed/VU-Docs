---
title: EntryInputActionMappingData (Frostbite Container)
---
### Base Classes

[InputActionMappingData](InputActionMappingData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| EntryInputActionMappingData()                                                          | Create a new instance of this container type.                                                                                                 |
| EntryInputActionMappingData(EntryInputActionMappingData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| EntryInputActionMappingData([InputActionMappingData](InputActionMappingData) other)    | Upcast an instance of type [InputActionMappingData](InputActionMappingData) to [EntryInputActionMappingData](EntryInputActionMappingData).    |
| EntryInputActionMappingData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EntryInputActionMappingData](EntryInputActionMappingData). |

## Properties

| Name              | Type                                               | Description |
| ----------------- | -------------------------------------------------- | ----------- |
| actionIdentifier  | [EntryInputActionEnum](EntryInputActionEnum)       |             |
| conceptIdentifier | [InputConceptIdentifiers](InputConceptIdentifiers) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EntryInputActionMappingData](EntryInputActionMappingData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EntryInputActionMappingData](EntryInputActionMappingData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
