---
title: PersistentCriteriaStatRef (Frostbite Container)
---
### Base Classes

[AbstractPersistentStatRef](AbstractPersistentStatRef)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                  |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| PersistentCriteriaStatRef()                                                             | Create a new instance of this container type.                                                                                                |
| PersistentCriteriaStatRef(PersistentCriteriaStatRef other)                              | Create a reference copy of an instance of the same type.                                                                                     |
| PersistentCriteriaStatRef([AbstractPersistentStatRef](AbstractPersistentStatRef) other) | Upcast an instance of type [AbstractPersistentStatRef](AbstractPersistentStatRef) to [PersistentCriteriaStatRef](PersistentCriteriaStatRef). |
| PersistentCriteriaStatRef([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PersistentCriteriaStatRef](PersistentCriteriaStatRef).    |

## Properties

| Name          | Type                                           | Description |
| ------------- | ---------------------------------------------- | ----------- |
| criteria      | [CriteriaData](CriteriaData)                   |             |
| paramX        | [StatsCategoryBaseData](StatsCategoryBaseData) |             |
| paramY        | [StatsCategoryBaseData](StatsCategoryBaseData) |             |
| criteriaOwner | [AwardData](AwardData)                         |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PersistentCriteriaStatRef](PersistentCriteriaStatRef) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PersistentCriteriaStatRef](PersistentCriteriaStatRef) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
