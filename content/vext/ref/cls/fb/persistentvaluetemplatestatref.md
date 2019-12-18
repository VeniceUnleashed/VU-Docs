---
title: PersistentValueTemplateStatRef (Frostbite Container)
---
### Base Classes

[AbstractPersistentStatRef](AbstractPersistentStatRef)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                            |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PersistentValueTemplateStatRef()                                                             | Create a new instance of this container type.                                                                                                          |
| PersistentValueTemplateStatRef(PersistentValueTemplateStatRef other)                         | Create a reference copy of an instance of the same type.                                                                                               |
| PersistentValueTemplateStatRef([AbstractPersistentStatRef](AbstractPersistentStatRef) other) | Upcast an instance of type [AbstractPersistentStatRef](AbstractPersistentStatRef) to [PersistentValueTemplateStatRef](PersistentValueTemplateStatRef). |
| PersistentValueTemplateStatRef([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PersistentValueTemplateStatRef](PersistentValueTemplateStatRef).    |

## Properties

| Name       | Type                                               | Description |
| ---------- | -------------------------------------------------- | ----------- |
| definition | [PersistentValueTemplate](PersistentValueTemplate) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PersistentValueTemplateStatRef](PersistentValueTemplateStatRef) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PersistentValueTemplateStatRef](PersistentValueTemplateStatRef) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
