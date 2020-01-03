---
title: DecalSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| DecalSettings()                                                          | Create a new instance of this container type.                                                                     |
| DecalSettings(DecalSettings other)                                       | Create a reference copy of an instance of the same type.                                                          |
| DecalSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [DecalSettings](/vext/ref/fb/decalsettings/).                    |
| DecalSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DecalSettings](/vext/ref/fb/decalsettings/). |

## Properties

| Name                               | Type   | Description |
| ---------------------------------- | ------ | ----------- |
| staticBufferMaxVertexCount         | number |             |
| ringBufferMaxVertexCount           | number |             |
| drawEnable                         | bool   |             |
| systemEnable2                      | bool   |             |
| systemEnable                       | bool   |             |
| enable                             | bool   |             |
| debugMemUsageEnable                | bool   |             |
| debugWarningsEnable                | bool   |             |
| nvidiaStreamOutputWorkaroundEnable | bool   |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [DecalSettings](/vext/ref/fb/decalsettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DecalSettings](/vext/ref/fb/decalsettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
