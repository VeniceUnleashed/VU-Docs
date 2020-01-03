---
title: UpdateAlphaLevelMinData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UpdateAlphaLevelMinData()                                                          | Create a new instance of this container type.                                                                                         |
| UpdateAlphaLevelMinData(UpdateAlphaLevelMinData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UpdateAlphaLevelMinData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [UpdateAlphaLevelMinData](/vext/ref/fb/updatealphalevelmindata/).                      |
| UpdateAlphaLevelMinData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [UpdateAlphaLevelMinData](/vext/ref/fb/updatealphalevelmindata/).        |
| UpdateAlphaLevelMinData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateAlphaLevelMinData](/vext/ref/fb/updatealphalevelmindata/). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| minLevel | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UpdateAlphaLevelMinData](/vext/ref/fb/updatealphalevelmindata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateAlphaLevelMinData](/vext/ref/fb/updatealphalevelmindata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
