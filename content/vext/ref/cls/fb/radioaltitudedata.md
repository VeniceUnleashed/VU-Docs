---
title: RadioAltitudeData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| RadioAltitudeData()                                                          | Create a new instance of this container type.                                                                             |
| RadioAltitudeData(RadioAltitudeData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| RadioAltitudeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RadioAltitudeData](RadioAltitudeData). |

## Properties

| Name            | Type                                       | Description |
| --------------- | ------------------------------------------ | ----------- |
| range           | number                                     |             |
| updateFrequency | number                                     |             |
| collisionMethod | [CollisionMethodEnum](CollisionMethodEnum) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [RadioAltitudeData](RadioAltitudeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RadioAltitudeData](RadioAltitudeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
