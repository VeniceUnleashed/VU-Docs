---
title: SpawnDirectionData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SpawnDirectionData()                                                          | Create a new instance of this container type.                                                                               |
| SpawnDirectionData(SpawnDirectionData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SpawnDirectionData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [SpawnDirectionData](/vext/ref/fb/spawndirectiondata/).                      |
| SpawnDirectionData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [SpawnDirectionData](/vext/ref/fb/spawndirectiondata/).        |
| SpawnDirectionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnDirectionData](/vext/ref/fb/spawndirectiondata/). |

## Properties

| Name                                | Type   | Description |
| ----------------------------------- | ------ | ----------- |
| directionFromEmitterOrigin          | number |             |
| inheritSpeedAndDirectionFromEmitter | bool   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnDirectionData](/vext/ref/fb/spawndirectiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnDirectionData](/vext/ref/fb/spawndirectiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
