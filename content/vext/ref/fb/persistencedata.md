---
title: PersistenceData
---
### Base Classes

[AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| PersistenceData()                                                          | Create a new instance of this container type.                                                                         |
| PersistenceData(PersistenceData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| PersistenceData([AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata/) other)  | Upcast an instance of type [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata/) to [PersistenceData](/vext/ref/fb/persistencedata/).  |
| PersistenceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PersistenceData](/vext/ref/fb/persistencedata/).                                      |
| PersistenceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistenceData](/vext/ref/fb/persistencedata/). |

## Properties

| Name                | Type                                                             | Description |
| ------------------- | ---------------------------------------------------------------- | ----------- |
| persistenceName     | string                                                           |             |
| clubPersistenceName | string                                                           |             |
| clientDefaultGroup  | [PersistenceStatGroup](/vext/ref/fb/persistencestatgroup/)                     |             |
| values              | [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata/)\[\]   |             |
| customReportValues  | [CustomReportValueData](/vext/ref/fb/customreportvaluedata/)\[\]               |             |
| serverDefaultGroup  | [PersistenceStatGroup](/vext/ref/fb/persistencestatgroup/)                     |             |
| retentionPolicy     | [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy/)         |             |
| consumableMappings  | [PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping/)\[\] |             |
| historyDaily        | bool                                                             |             |
| historyWeekly       | bool                                                             |             |
| historyMonthly      | bool                                                             |             |
| outputProperties    | bool                                                             |             |
| deltaGameReports    | bool                                                             |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [PersistenceData](/vext/ref/fb/persistencedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistenceData](/vext/ref/fb/persistencedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
