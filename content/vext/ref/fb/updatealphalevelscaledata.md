---
title: UpdateAlphaLevelScaleData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UpdateAlphaLevelScaleData()                                                          | Create a new instance of this container type.                                                                                             |
| UpdateAlphaLevelScaleData(UpdateAlphaLevelScaleData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| UpdateAlphaLevelScaleData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [UpdateAlphaLevelScaleData](/vext/ref/fb/updatealphalevelscaledata/).                      |
| UpdateAlphaLevelScaleData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [UpdateAlphaLevelScaleData](/vext/ref/fb/updatealphalevelscaledata/).        |
| UpdateAlphaLevelScaleData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateAlphaLevelScaleData](/vext/ref/fb/updatealphalevelscaledata/). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| exponent | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UpdateAlphaLevelScaleData](/vext/ref/fb/updatealphalevelscaledata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateAlphaLevelScaleData](/vext/ref/fb/updatealphalevelscaledata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
