---
title: CustomSequenceTrackEventMapping
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomSequenceTrackEventMapping()                                                          | Create a new instance of this container type.                                                                                                         |
| CustomSequenceTrackEventMapping(CustomSequenceTrackEventMapping other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| CustomSequenceTrackEventMapping([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomSequenceTrackEventMapping](/vext/ref/fb/customsequencetrackeventmapping/). |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| trackEventID    | number |             |
| sequenceEventID | number |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CustomSequenceTrackEventMapping](/vext/ref/fb/customsequencetrackeventmapping/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomSequenceTrackEventMapping](/vext/ref/fb/customsequencetrackeventmapping/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
