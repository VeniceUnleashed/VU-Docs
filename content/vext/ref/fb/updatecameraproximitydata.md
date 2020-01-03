---
title: UpdateCameraProximityData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UpdateCameraProximityData()                                                          | Create a new instance of this container type.                                                                                             |
| UpdateCameraProximityData(UpdateCameraProximityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| UpdateCameraProximityData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata/).                      |
| UpdateCameraProximityData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata/).        |
| UpdateCameraProximityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata/). |

## Properties

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| size          | [Vec3](/vext/ref/shared/class/vec3) |             |
| forwardOffset | number                            |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
