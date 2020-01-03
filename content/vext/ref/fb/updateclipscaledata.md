---
title: UpdateClipScaleData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UpdateClipScaleData()                                                          | Create a new instance of this container type.                                                                                 |
| UpdateClipScaleData(UpdateClipScaleData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UpdateClipScaleData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [UpdateClipScaleData](/vext/ref/fb/updateclipscaledata/).                      |
| UpdateClipScaleData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [UpdateClipScaleData](/vext/ref/fb/updateclipscaledata/).        |
| UpdateClipScaleData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateClipScaleData](/vext/ref/fb/updateclipscaledata/). |

## Properties

| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| lookup | number\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UpdateClipScaleData](/vext/ref/fb/updateclipscaledata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateClipScaleData](/vext/ref/fb/updateclipscaledata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
