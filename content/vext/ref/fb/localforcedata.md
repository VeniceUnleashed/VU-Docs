---
title: LocalForceData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| LocalForceData()                                                          | Create a new instance of this container type.                                                                       |
| LocalForceData(LocalForceData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| LocalForceData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [LocalForceData](/vext/ref/fb/localforcedata/).                      |
| LocalForceData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [LocalForceData](/vext/ref/fb/localforcedata/).        |
| LocalForceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LocalForceData](/vext/ref/fb/localforcedata/). |

## Properties

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| localForce | [Vec3](/vext/ref/shared/class/vec3) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [LocalForceData](/vext/ref/fb/localforcedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LocalForceData](/vext/ref/fb/localforcedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
