---
title: AbstractPersistenceData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AbstractPersistenceData()                                                          | Create a new instance of this container type.                                                                                         |
| AbstractPersistenceData(AbstractPersistenceData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| AbstractPersistenceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AbstractPersistenceData](AbstractPersistenceData).                                      |
| AbstractPersistenceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AbstractPersistenceData](AbstractPersistenceData). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AbstractPersistenceData](AbstractPersistenceData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AbstractPersistenceData](AbstractPersistenceData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
