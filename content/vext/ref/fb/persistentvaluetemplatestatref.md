---
title: PersistentValueTemplateStatRef
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
| PersistentValueTemplateStatRef([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistentValueTemplateStatRef](PersistentValueTemplateStatRef).    |

## Properties

| Name       | Type                                               | Description |
| ---------- | -------------------------------------------------- | ----------- |
| definition | [PersistentValueTemplate](PersistentValueTemplate) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PersistentValueTemplateStatRef](PersistentValueTemplateStatRef) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistentValueTemplateStatRef](PersistentValueTemplateStatRef) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
