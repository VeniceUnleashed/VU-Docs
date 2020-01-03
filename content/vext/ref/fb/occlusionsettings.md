---
title: OcclusionSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| OcclusionSettings()                                                          | Create a new instance of this container type.                                                                             |
| OcclusionSettings(OcclusionSettings other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| OcclusionSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OcclusionSettings](/vext/ref/fb/occlusionsettings/). |

## Properties

| Name             | Type | Description |
| ---------------- | ---- | ----------- |
| enable           | bool |             |
| drawZbuffer      | bool |             |
| drawBinaryBuffer | bool |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [OcclusionSettings](/vext/ref/fb/occlusionsettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OcclusionSettings](/vext/ref/fb/occlusionsettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
