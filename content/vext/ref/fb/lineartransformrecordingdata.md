---
title: LinearTransformRecordingData
---
### Base Classes

[PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| LinearTransformRecordingData()                                                          | Create a new instance of this container type.                                                                                                   |
| LinearTransformRecordingData(LinearTransformRecordingData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| LinearTransformRecordingData([PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/) other)      | Upcast an instance of type [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/) to [LinearTransformRecordingData](/vext/ref/fb/lineartransformrecordingdata/).      |
| LinearTransformRecordingData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LinearTransformRecordingData](/vext/ref/fb/lineartransformrecordingdata/). |

## Properties

| Name   | Type                                                        | Description |
| ------ | ----------------------------------------------------------- | ----------- |
| values | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LinearTransformRecordingData](/vext/ref/fb/lineartransformrecordingdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LinearTransformRecordingData](/vext/ref/fb/lineartransformrecordingdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
