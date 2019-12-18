---
title: PersistentValueTemplate (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| PersistentValueTemplate()                                                          | Create a new instance of this container type.                                                                                         |
| PersistentValueTemplate(PersistentValueTemplate other)                             | Create a reference copy of an instance of the same type.                                                                              |
| PersistentValueTemplate([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PersistentValueTemplate](PersistentValueTemplate). |

## Properties

| Name               | Type                                                       | Description |
| ------------------ | ---------------------------------------------------------- | ----------- |
| data               | [PersistentValueTemplateData](PersistentValueTemplateData) |             |
| derivedFormulaRefs | [AbstractPersistentStatRef](AbstractPersistentStatRef)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PersistentValueTemplate](PersistentValueTemplate) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PersistentValueTemplate](PersistentValueTemplate) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
