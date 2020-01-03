---
title: AwardData
---
### Base Classes

[AbstractAwardData](/vext/ref/fb/abstractawarddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| AwardData()                                                          | Create a new instance of this container type.                                                             |
| AwardData(AwardData other)                                           | Create a reference copy of an instance of the same type.                                                  |
| AwardData([AbstractAwardData](/vext/ref/fb/abstractawarddata/) other)              | Upcast an instance of type [AbstractAwardData](/vext/ref/fb/abstractawarddata/) to [AwardData](/vext/ref/fb/awarddata/).              |
| AwardData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [AwardData](/vext/ref/fb/awarddata/).                        |
| AwardData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AwardData](/vext/ref/fb/awarddata/). |

## Properties

| Name                | Type                                       | Description |
| ------------------- | ------------------------------------------ | ----------- |
| filteredChildAwards | [AwardData](/vext/ref/fb/awarddata/)\[\]                 |             |
| criteria            | [CriteriaData](/vext/ref/fb/criteriadata/)\[\]           |             |
| code                | string                                     |             |
| description         | string                                     |             |
| nameSid             | string                                     |             |
| kitAssociation      | [AwardKitAssociation](/vext/ref/fb/awardkitassociation/) |             |
| imageName           | string                                     |             |
| imageSmallName      | string                                     |             |
| imageFancyName      | string                                     |             |
| soundName           | string                                     |             |
| repeatValue         | [AwardType](/vext/ref/fb/awardtype/)                     |             |
| licenses            | string\[\]                                 |             |
| maxRepetitions      | number                                     |             |
| dependencies        | [CriteriaAward](/vext/ref/fb/criteriaaward/)\[\]         |             |
| group               | [AwardGroup](/vext/ref/fb/awardgroup/)                   |             |
| multiplicity        | [StatsMultiplicity](/vext/ref/fb/statsmultiplicity/)     |             |
| unlockGates         | [CriteriaGateList](/vext/ref/fb/criteriagatelist/)       |             |
| parentAward         | [AwardData](/vext/ref/fb/awarddata/)                     |             |
| score               | number                                     |             |
| bucket              | [ScoringBucket](/vext/ref/fb/scoringbucket/)             |             |
| unlockInfos         | [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo/)\[\]     |             |
| activeOnCreation    | bool                                       |             |
| visible             | bool                                       |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [AwardData](/vext/ref/fb/awarddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AwardData](/vext/ref/fb/awarddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
