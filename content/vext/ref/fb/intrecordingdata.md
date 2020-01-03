---
title: IntRecordingData
---
### Base Classes

[PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| IntRecordingData()                                                          | Create a new instance of this container type.                                                                           |
| IntRecordingData(IntRecordingData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| IntRecordingData([PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/) other)      | Upcast an instance of type [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/) to [IntRecordingData](/vext/ref/fb/intrecordingdata/).      |
| IntRecordingData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [IntRecordingData](/vext/ref/fb/intrecordingdata/). |

## Properties

| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| values | number\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [IntRecordingData](/vext/ref/fb/intrecordingdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [IntRecordingData](/vext/ref/fb/intrecordingdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
