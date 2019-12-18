---
title: InputActionMappingsData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| InputActionMappingsData()                                                          | Create a new instance of this container type.                                                                                         |
| InputActionMappingsData(InputActionMappingsData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| InputActionMappingsData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [InputActionMappingsData](InputActionMappingsData). |

## Properties

| Name     | Type                                                 | Description |
| -------- | ---------------------------------------------------- | ----------- |
| mappings | [InputActionMappingData](InputActionMappingData)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [InputActionMappingsData](InputActionMappingsData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [InputActionMappingsData](InputActionMappingsData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
