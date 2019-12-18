---
title: ScopeFilterData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ScopeFilterData()                                                          | Create a new instance of this container type.                                                                         |
| ScopeFilterData(ScopeFilterData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| ScopeFilterData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ScopeFilterData](ScopeFilterData).                                      |
| ScopeFilterData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ScopeFilterData](ScopeFilterData). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [ScopeFilterData](ScopeFilterData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ScopeFilterData](ScopeFilterData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
