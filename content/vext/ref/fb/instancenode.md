---
title: InstanceNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| InstanceNode()                                                          | Create a new instance of this container type.                                                                   |
| InstanceNode(InstanceNode other)                                        | Create a reference copy of an instance of the same type.                                                        |
| InstanceNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [InstanceNode](/vext/ref/fb/instancenode/).                            |
| InstanceNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InstanceNode](/vext/ref/fb/instancenode/). |

## Properties

| Name    | Type                         | Description |
| ------- | ---------------------------- | ----------- |
| uiGraph | [UIGraphAsset](/vext/ref/fb/uigraphasset/) |             |
| inputs  | [UINodePort](/vext/ref/fb/uinodeport/)\[\] |             |
| outputs | [UINodePort](/vext/ref/fb/uinodeport/)\[\] |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [InstanceNode](/vext/ref/fb/instancenode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InstanceNode](/vext/ref/fb/instancenode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
