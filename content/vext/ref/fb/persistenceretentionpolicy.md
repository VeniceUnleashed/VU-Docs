---
title: PersistenceRetentionPolicy
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PersistenceRetentionPolicy()                                                          | Create a new instance of this container type.                                                                                               |
| PersistenceRetentionPolicy(PersistenceRetentionPolicy other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PersistenceRetentionPolicy([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy/).                                      |
| PersistenceRetentionPolicy([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy/). |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| dailyHistoryCount   | number |             |
| weeklyHistoryCount  | number |             |
| monthlyHistoryCount | number |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
