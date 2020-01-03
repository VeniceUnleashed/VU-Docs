---
title: InstanceOutputNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| InstanceOutputNode()                                                          | Create a new instance of this container type.                                                                               |
| InstanceOutputNode(InstanceOutputNode other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| InstanceOutputNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [InstanceOutputNode](/vext/ref/fb/instanceoutputnode/).                            |
| InstanceOutputNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InstanceOutputNode](/vext/ref/fb/instanceoutputnode/). |

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| inValue      | [UINodePort](/vext/ref/fb/uinodeport/) |             |
| id           | number                   |             |
| destroyGraph | bool                     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [InstanceOutputNode](/vext/ref/fb/instanceoutputnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InstanceOutputNode](/vext/ref/fb/instanceoutputnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
