---
title: InAirStateData
---
### Base Classes

[CharacterStateData](/vext/ref/fb/characterstatedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| InAirStateData()                                                          | Create a new instance of this container type.                                                                       |
| InAirStateData(InAirStateData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| InAirStateData([CharacterStateData](/vext/ref/fb/characterstatedata/) other)            | Upcast an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata/) to [InAirStateData](/vext/ref/fb/inairstatedata/).            |
| InAirStateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InAirStateData](/vext/ref/fb/inairstatedata/). |

## Properties

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| freeFallVelocity | number |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [InAirStateData](/vext/ref/fb/inairstatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InAirStateData](/vext/ref/fb/inairstatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
