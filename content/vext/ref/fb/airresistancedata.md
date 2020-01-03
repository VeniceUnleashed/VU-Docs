---
title: AirResistanceData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AirResistanceData()                                                          | Create a new instance of this container type.                                                                             |
| AirResistanceData(AirResistanceData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| AirResistanceData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [AirResistanceData](/vext/ref/fb/airresistancedata/).                      |
| AirResistanceData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [AirResistanceData](/vext/ref/fb/airresistancedata/).        |
| AirResistanceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AirResistanceData](/vext/ref/fb/airresistancedata/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| dragFactor | number |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [AirResistanceData](/vext/ref/fb/airresistancedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AirResistanceData](/vext/ref/fb/airresistancedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
