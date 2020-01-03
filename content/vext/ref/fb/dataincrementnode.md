---
title: DataIncrementNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DataIncrementNode()                                                          | Create a new instance of this container type.                                                                             |
| DataIncrementNode(DataIncrementNode other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| DataIncrementNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [DataIncrementNode](/vext/ref/fb/dataincrementnode/).                            |
| DataIncrementNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DataIncrementNode](/vext/ref/fb/dataincrementnode/). |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| inValue       | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| out           | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| max           | number                               |             |
| min           | number                               |             |
| incrementSize | number                               |             |
| dataSource    | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [DataIncrementNode](/vext/ref/fb/dataincrementnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DataIncrementNode](/vext/ref/fb/dataincrementnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
