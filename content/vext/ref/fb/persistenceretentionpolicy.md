---
title: PersistenceRetentionPolicy
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PersistenceRetentionPolicy()                                                          | Create a new instance of this container type.                                                                                               |
| PersistenceRetentionPolicy(PersistenceRetentionPolicy other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PersistenceRetentionPolicy([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PersistenceRetentionPolicy](PersistenceRetentionPolicy).                                      |
| PersistenceRetentionPolicy([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistenceRetentionPolicy](PersistenceRetentionPolicy). |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| dailyHistoryCount   | number |             |
| weeklyHistoryCount  | number |             |
| monthlyHistoryCount | number |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PersistenceRetentionPolicy](PersistenceRetentionPolicy) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistenceRetentionPolicy](PersistenceRetentionPolicy) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
