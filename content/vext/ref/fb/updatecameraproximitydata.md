---
title: UpdateCameraProximityData
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UpdateCameraProximityData()                                                          | Create a new instance of this container type.                                                                                             |
| UpdateCameraProximityData(UpdateCameraProximityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| UpdateCameraProximityData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [UpdateCameraProximityData](UpdateCameraProximityData).                      |
| UpdateCameraProximityData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [UpdateCameraProximityData](UpdateCameraProximityData).        |
| UpdateCameraProximityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateCameraProximityData](UpdateCameraProximityData). |

## Properties

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| size          | [Vec3](/vext/ref/shared/class/vec3) |             |
| forwardOffset | number                            |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UpdateCameraProximityData](UpdateCameraProximityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateCameraProximityData](UpdateCameraProximityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
