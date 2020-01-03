---
title: RadioAltitudeData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| RadioAltitudeData()                                                          | Create a new instance of this container type.                                                                             |
| RadioAltitudeData(RadioAltitudeData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| RadioAltitudeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RadioAltitudeData](/vext/ref/fb/radioaltitudedata/). |

## Properties

| Name            | Type                                       | Description |
| --------------- | ------------------------------------------ | ----------- |
| range           | number                                     |             |
| updateFrequency | number                                     |             |
| collisionMethod | [CollisionMethodEnum](/vext/ref/fb/collisionmethodenum/) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [RadioAltitudeData](/vext/ref/fb/radioaltitudedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RadioAltitudeData](/vext/ref/fb/radioaltitudedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
