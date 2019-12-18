---
title: OcclusionSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| OcclusionSettings()                                                          | Create a new instance of this container type.                                                                             |
| OcclusionSettings(OcclusionSettings other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| OcclusionSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [OcclusionSettings](OcclusionSettings). |

## Properties

| Name             | Type | Description |
| ---------------- | ---- | ----------- |
| enable           | bool |             |
| drawZbuffer      | bool |             |
| drawBinaryBuffer | bool |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [OcclusionSettings](OcclusionSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [OcclusionSettings](OcclusionSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
