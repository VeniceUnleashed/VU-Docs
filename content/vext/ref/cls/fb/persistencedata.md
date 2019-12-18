---
title: PersistenceData (Frostbite Container)
---
### Base Classes

[AbstractPersistenceData](AbstractPersistenceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| PersistenceData()                                                          | Create a new instance of this container type.                                                                         |
| PersistenceData(PersistenceData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| PersistenceData([AbstractPersistenceData](AbstractPersistenceData) other)  | Upcast an instance of type [AbstractPersistenceData](AbstractPersistenceData) to [PersistenceData](PersistenceData).  |
| PersistenceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PersistenceData](PersistenceData).                                      |
| PersistenceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PersistenceData](PersistenceData). |

## Properties

| Name                | Type                                                             | Description |
| ------------------- | ---------------------------------------------------------------- | ----------- |
| persistenceName     | string                                                           |             |
| clubPersistenceName | string                                                           |             |
| clientDefaultGroup  | [PersistenceStatGroup](PersistenceStatGroup)                     |             |
| values              | [PersistentValueTemplateData](PersistentValueTemplateData)\[\]   |             |
| customReportValues  | [CustomReportValueData](CustomReportValueData)\[\]               |             |
| serverDefaultGroup  | [PersistenceStatGroup](PersistenceStatGroup)                     |             |
| retentionPolicy     | [PersistenceRetentionPolicy](PersistenceRetentionPolicy)         |             |
| consumableMappings  | [PersistenceConsumableMapping](PersistenceConsumableMapping)\[\] |             |
| historyDaily        | bool                                                             |             |
| historyWeekly       | bool                                                             |             |
| historyMonthly      | bool                                                             |             |
| outputProperties    | bool                                                             |             |
| deltaGameReports    | bool                                                             |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [PersistenceData](PersistenceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PersistenceData](PersistenceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
