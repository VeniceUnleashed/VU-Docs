---
title: InstanceNode
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| InstanceNode()                                                          | Create a new instance of this container type.                                                                   |
| InstanceNode(InstanceNode other)                                        | Create a reference copy of an instance of the same type.                                                        |
| InstanceNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [InstanceNode](InstanceNode).                            |
| InstanceNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InstanceNode](InstanceNode). |

## Properties

| Name    | Type                         | Description |
| ------- | ---------------------------- | ----------- |
| uiGraph | [UIGraphAsset](UIGraphAsset) |             |
| inputs  | [UINodePort](UINodePort)\[\] |             |
| outputs | [UINodePort](UINodePort)\[\] |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [InstanceNode](InstanceNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InstanceNode](InstanceNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
