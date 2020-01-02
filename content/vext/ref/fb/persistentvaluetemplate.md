---
title: PersistentValueTemplate
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| PersistentValueTemplate()                                                          | Create a new instance of this container type.                                                                                         |
| PersistentValueTemplate(PersistentValueTemplate other)                             | Create a reference copy of an instance of the same type.                                                                              |
| PersistentValueTemplate([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistentValueTemplate](PersistentValueTemplate). |

## Properties

| Name               | Type                                                       | Description |
| ------------------ | ---------------------------------------------------------- | ----------- |
| data               | [PersistentValueTemplateData](PersistentValueTemplateData) |             |
| derivedFormulaRefs | [AbstractPersistentStatRef](AbstractPersistentStatRef)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PersistentValueTemplate](PersistentValueTemplate) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistentValueTemplate](PersistentValueTemplate) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
