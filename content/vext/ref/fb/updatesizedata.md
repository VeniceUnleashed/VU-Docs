---
title: UpdateSizeData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| UpdateSizeData()                                                          | Create a new instance of this container type.                                                                       |
| UpdateSizeData(UpdateSizeData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| UpdateSizeData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [UpdateSizeData](/vext/ref/fb/updatesizedata/).                      |
| UpdateSizeData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [UpdateSizeData](/vext/ref/fb/updatesizedata/).        |
| UpdateSizeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateSizeData](/vext/ref/fb/updatesizedata/). |

## Properties

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| pivot | [Vec2](/vext/ref/shared/class/vec2) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [UpdateSizeData](/vext/ref/fb/updatesizedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateSizeData](/vext/ref/fb/updatesizedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
