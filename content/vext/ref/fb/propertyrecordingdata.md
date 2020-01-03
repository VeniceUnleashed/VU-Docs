---
title: PropertyRecordingData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| PropertyRecordingData()                                                          | Create a new instance of this container type.                                                                                     |
| PropertyRecordingData(PropertyRecordingData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| PropertyRecordingData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| id   | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
