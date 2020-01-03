---
title: CustomSequenceTrackLinkMapping
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomSequenceTrackLinkMapping()                                                          | Create a new instance of this container type.                                                                                                       |
| CustomSequenceTrackLinkMapping(CustomSequenceTrackLinkMapping other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| CustomSequenceTrackLinkMapping([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomSequenceTrackLinkMapping](CustomSequenceTrackLinkMapping). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| trackLinkID    | number |             |
| sequenceLinkID | number |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CustomSequenceTrackLinkMapping](CustomSequenceTrackLinkMapping) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomSequenceTrackLinkMapping](CustomSequenceTrackLinkMapping) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
