---
title: PersistentCriteriaStatRef
---
### Base Classes

[AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                  |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| PersistentCriteriaStatRef()                                                             | Create a new instance of this container type.                                                                                                |
| PersistentCriteriaStatRef(PersistentCriteriaStatRef other)                              | Create a reference copy of an instance of the same type.                                                                                     |
| PersistentCriteriaStatRef([AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/) other) | Upcast an instance of type [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/) to [PersistentCriteriaStatRef](/vext/ref/fb/persistentcriteriastatref/). |
| PersistentCriteriaStatRef([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistentCriteriaStatRef](/vext/ref/fb/persistentcriteriastatref/).    |

## Properties

| Name          | Type                                           | Description |
| ------------- | ---------------------------------------------- | ----------- |
| criteria      | [CriteriaData](/vext/ref/fb/criteriadata/)                   |             |
| paramX        | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) |             |
| paramY        | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/) |             |
| criteriaOwner | [AwardData](/vext/ref/fb/awarddata/)                         |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PersistentCriteriaStatRef](/vext/ref/fb/persistentcriteriastatref/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistentCriteriaStatRef](/vext/ref/fb/persistentcriteriastatref/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
