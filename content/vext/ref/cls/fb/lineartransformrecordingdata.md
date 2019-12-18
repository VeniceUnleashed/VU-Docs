---
title: LinearTransformRecordingData (Frostbite Container)
---
### Base Classes

[PropertyRecordingData](PropertyRecordingData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| LinearTransformRecordingData()                                                          | Create a new instance of this container type.                                                                                                   |
| LinearTransformRecordingData(LinearTransformRecordingData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| LinearTransformRecordingData([PropertyRecordingData](PropertyRecordingData) other)      | Upcast an instance of type [PropertyRecordingData](PropertyRecordingData) to [LinearTransformRecordingData](LinearTransformRecordingData).      |
| LinearTransformRecordingData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LinearTransformRecordingData](LinearTransformRecordingData). |

## Properties

| Name   | Type                                                        | Description |
| ------ | ----------------------------------------------------------- | ----------- |
| values | [LinearTransform](/vext/ref/cls/shr/LinearTransform)\[\] |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LinearTransformRecordingData](LinearTransformRecordingData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LinearTransformRecordingData](LinearTransformRecordingData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
