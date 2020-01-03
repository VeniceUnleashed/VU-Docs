---
title: RecordedInputData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| RecordedInputData()                                                          | Create a new instance of this container type.                                                                             |
| RecordedInputData(RecordedInputData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| RecordedInputData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [RecordedInputData](/vext/ref/fb/recordedinputdata/).                                      |
| RecordedInputData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RecordedInputData](/vext/ref/fb/recordedinputdata/). |

## Properties

| Name      | Type                                                 | Description |
| --------- | ---------------------------------------------------- | ----------- |
| trackData | [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata/)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [RecordedInputData](/vext/ref/fb/recordedinputdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RecordedInputData](/vext/ref/fb/recordedinputdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
