---
title: AwardHeaderData
---
### Base Classes

[AbstractAwardData](/vext/ref/fb/abstractawarddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| AwardHeaderData()                                                          | Create a new instance of this container type.                                                                         |
| AwardHeaderData(AwardHeaderData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| AwardHeaderData([AbstractAwardData](/vext/ref/fb/abstractawarddata/) other)              | Upcast an instance of type [AbstractAwardData](/vext/ref/fb/abstractawarddata/) to [AwardHeaderData](/vext/ref/fb/awardheaderdata/).              |
| AwardHeaderData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [AwardHeaderData](/vext/ref/fb/awardheaderdata/).                        |
| AwardHeaderData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AwardHeaderData](/vext/ref/fb/awardheaderdata/). |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| group        | [AwardGroup](/vext/ref/fb/awardgroup/)               |             |
| multiplicity | [StatsMultiplicity](/vext/ref/fb/statsmultiplicity/) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [AwardHeaderData](/vext/ref/fb/awardheaderdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AwardHeaderData](/vext/ref/fb/awardheaderdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
