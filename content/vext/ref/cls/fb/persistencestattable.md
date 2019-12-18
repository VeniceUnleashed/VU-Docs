---
title: PersistenceStatTable (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| PersistenceStatTable()                                                          | Create a new instance of this container type.                                                                                   |
| PersistenceStatTable(PersistenceStatTable other)                                | Create a reference copy of an instance of the same type.                                                                        |
| PersistenceStatTable([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PersistenceStatTable](PersistenceStatTable). |

## Properties

| Name                 | Type                                               | Description |
| -------------------- | -------------------------------------------------- | ----------- |
| tableName            | string                                             |             |
| ownerPersistenceData | [AbstractPersistenceData](AbstractPersistenceData) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [PersistenceStatTable](PersistenceStatTable) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PersistenceStatTable](PersistenceStatTable) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
