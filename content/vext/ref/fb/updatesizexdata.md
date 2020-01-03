---
title: UpdateSizeXData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UpdateSizeXData()                                                          | Create a new instance of this container type.                                                                         |
| UpdateSizeXData(UpdateSizeXData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UpdateSizeXData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [UpdateSizeXData](/vext/ref/fb/updatesizexdata/).                      |
| UpdateSizeXData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [UpdateSizeXData](/vext/ref/fb/updatesizexdata/).        |
| UpdateSizeXData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateSizeXData](/vext/ref/fb/updatesizexdata/). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UpdateSizeXData](/vext/ref/fb/updatesizexdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateSizeXData](/vext/ref/fb/updatesizexdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
