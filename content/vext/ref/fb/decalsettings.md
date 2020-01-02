---
title: DecalSettings
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| DecalSettings()                                                          | Create a new instance of this container type.                                                                     |
| DecalSettings(DecalSettings other)                                       | Create a reference copy of an instance of the same type.                                                          |
| DecalSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [DecalSettings](DecalSettings).                    |
| DecalSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DecalSettings](DecalSettings). |

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
| [DecalSettings](DecalSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DecalSettings](DecalSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
