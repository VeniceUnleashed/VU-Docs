---
title: CustomSequenceTrackPropertyMapping
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                                 |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomSequenceTrackPropertyMapping()                                                          | Create a new instance of this container type.                                                                                                               |
| CustomSequenceTrackPropertyMapping(CustomSequenceTrackPropertyMapping other)                  | Create a reference copy of an instance of the same type.                                                                                                    |
| CustomSequenceTrackPropertyMapping([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomSequenceTrackPropertyMapping](CustomSequenceTrackPropertyMapping). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| trackPropertyID    | number |             |
| sequencePropertyID | number |             |

## Methods

| Type                                                                     | Name            | Parameters                                     |
| ------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CustomSequenceTrackPropertyMapping](CustomSequenceTrackPropertyMapping) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomSequenceTrackPropertyMapping](CustomSequenceTrackPropertyMapping) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
