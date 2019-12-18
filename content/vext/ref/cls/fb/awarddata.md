---
title: AwardData (Frostbite Container)
---
### Base Classes

[AbstractAwardData](AbstractAwardData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| AwardData()                                                          | Create a new instance of this container type.                                                             |
| AwardData(AwardData other)                                           | Create a reference copy of an instance of the same type.                                                  |
| AwardData([AbstractAwardData](AbstractAwardData) other)              | Upcast an instance of type [AbstractAwardData](AbstractAwardData) to [AwardData](AwardData).              |
| AwardData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [AwardData](AwardData).                        |
| AwardData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AwardData](AwardData). |

## Properties

| Name                | Type                                       | Description |
| ------------------- | ------------------------------------------ | ----------- |
| filteredChildAwards | [AwardData](AwardData)\[\]                 |             |
| criteria            | [CriteriaData](CriteriaData)\[\]           |             |
| code                | string                                     |             |
| description         | string                                     |             |
| nameSid             | string                                     |             |
| kitAssociation      | [AwardKitAssociation](AwardKitAssociation) |             |
| imageName           | string                                     |             |
| imageSmallName      | string                                     |             |
| imageFancyName      | string                                     |             |
| soundName           | string                                     |             |
| repeatValue         | [AwardType](AwardType)                     |             |
| licenses            | string\[\]                                 |             |
| maxRepetitions      | number                                     |             |
| dependencies        | [CriteriaAward](CriteriaAward)\[\]         |             |
| group               | [AwardGroup](AwardGroup)                   |             |
| multiplicity        | [StatsMultiplicity](StatsMultiplicity)     |             |
| unlockGates         | [CriteriaGateList](CriteriaGateList)       |             |
| parentAward         | [AwardData](AwardData)                     |             |
| score               | number                                     |             |
| bucket              | [ScoringBucket](ScoringBucket)             |             |
| unlockInfos         | [BasicUnlockInfo](BasicUnlockInfo)\[\]     |             |
| activeOnCreation    | bool                                       |             |
| visible             | bool                                       |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [AwardData](AwardData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AwardData](AwardData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
