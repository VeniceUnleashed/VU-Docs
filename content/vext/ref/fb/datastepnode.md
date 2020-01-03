---
title: DataStepNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| DataStepNode()                                                          | Create a new instance of this container type.                                                                   |
| DataStepNode(DataStepNode other)                                        | Create a reference copy of an instance of the same type.                                                        |
| DataStepNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [DataStepNode](/vext/ref/fb/datastepnode/).                            |
| DataStepNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DataStepNode](/vext/ref/fb/datastepnode/). |

## Properties

| Name                  | Type                                 | Description |
| --------------------- | ------------------------------------ | ----------- |
| inValue               | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| out                   | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| steps                 | number\[\]                           |             |
| currentStepDataSource | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| dataSource            | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [DataStepNode](/vext/ref/fb/datastepnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DataStepNode](/vext/ref/fb/datastepnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
