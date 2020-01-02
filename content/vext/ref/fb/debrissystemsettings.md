---
title: DebrisSystemSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| DebrisSystemSettings()                                                          | Create a new instance of this container type.                                                                                   |
| DebrisSystemSettings(DebrisSystemSettings other)                                | Create a reference copy of an instance of the same type.                                                                        |
| DebrisSystemSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebrisSystemSettings](DebrisSystemSettings). |

## Properties

| Name                            | Type   | Description |
| ------------------------------- | ------ | ----------- |
| meshDrawCountLimit              | number |             |
| timeScale                       | number |             |
| meshCullingDistance             | number |             |
| drawStats                       | number |             |
| meshBatchCountLimit             | number |             |
| meshStreamingPriorityMultiplier | number |             |
| meshRenderingEnable             | bool   |             |
| enableJobs                      | bool   |             |
| meshShadowEnable                | bool   |             |
| meshViewCullingEnable           | bool   |             |
| meshHavokRenderingEnable        | bool   |             |
| meshDrawTransforms              | bool   |             |
| enable                          | bool   |             |
| meshDrawBoundingBoxes           | bool   |             |
| meshDrawCullStats               | bool   |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [DebrisSystemSettings](DebrisSystemSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebrisSystemSettings](DebrisSystemSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
