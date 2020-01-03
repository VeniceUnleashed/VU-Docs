---
title: UIGraphPipelineSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UIGraphPipelineSettings()                                                          | Create a new instance of this container type.                                                                                         |
| UIGraphPipelineSettings(UIGraphPipelineSettings other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UIGraphPipelineSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGraphPipelineSettings](UIGraphPipelineSettings). |

## Properties

| Name              | Type | Description |
| ----------------- | ---- | ----------- |
| oneBundlePerGraph | bool |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIGraphPipelineSettings](UIGraphPipelineSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIGraphPipelineSettings](UIGraphPipelineSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
