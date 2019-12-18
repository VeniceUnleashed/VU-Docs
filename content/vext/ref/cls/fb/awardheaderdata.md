---
title: AwardHeaderData (Frostbite Container)
---
### Base Classes

[AbstractAwardData](AbstractAwardData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| AwardHeaderData()                                                          | Create a new instance of this container type.                                                                         |
| AwardHeaderData(AwardHeaderData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| AwardHeaderData([AbstractAwardData](AbstractAwardData) other)              | Upcast an instance of type [AbstractAwardData](AbstractAwardData) to [AwardHeaderData](AwardHeaderData).              |
| AwardHeaderData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [AwardHeaderData](AwardHeaderData).                        |
| AwardHeaderData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AwardHeaderData](AwardHeaderData). |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| group        | [AwardGroup](AwardGroup)               |             |
| multiplicity | [StatsMultiplicity](StatsMultiplicity) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [AwardHeaderData](AwardHeaderData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AwardHeaderData](AwardHeaderData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
